'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); // run our local server (dev)
var open = require('gulp-open'); // open our default browser
var browserify = require('browserify'); // bundle JS and lets us use the common js pattern
var reactify = require('reactify'); // transpile our JSX into JS
var source = require('vinyl-source-stream'); // use conventional text stream with gulp
var concat = require('gulp-concat'); // concatenate our files

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		mainJs: './src/main.js',
		images: './src/images/*',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
		dist: './dist'
	}
};

// setup for our dev server
gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

// depends on connect task, and will auto run a default browser
gulp.task('open', ['connect'], function () {
	gulp.src('dist/index.html')
		.pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});
 
// take html files from src directory and put them in dist dir, and refresh
gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

// take css files from src directory and put them in dist dir, and refresh
gulp.task('css', function () {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('images', function () {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	
});

gulp.task('default', ['html', 'css', 'js', 'open', 'watch']);

