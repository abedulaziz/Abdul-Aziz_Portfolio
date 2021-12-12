var gulp = require('gulp'),
  concat = require('gulp-concat'), // concatenates files
  prefix = require('gulp-autoprefixer'), // adds prefixes to CSS3
  sass = require('gulp-sass')(require('sass')), // compiles Sass files
  pug = require('gulp-pug'), // compiles pug files
  livereload = require('gulp-livereload'), // creates a stream which notifies the livereload server on what changed
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'), // minifies JavaScript files
  notify = require('gulp-notify'), //send messages to Mac Notification Center, Linux notifications (using notify-send) or Windows >= 8 (using native toaster) or Growl as fallback, using the node-notifier module. 
  zip = require('gulp-zip'), // ZIP compress files
  ftp = require('vinyl-ftp');

// Html Task
gulp.task('html', function() {
  return gulp.src('project processing/index.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('web'))
  //.pipe(notify("HMTL task is Done"))
  .pipe(livereload());
});

// CSS task
gulp.task('css', function() {
  return gulp.src('project processing/SCSS/main.scss')
  //.pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(prefix('last 2 versions'))
  .pipe(concat('main.css'))
  //.pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('web/CSS'))
  .pipe(livereload());
})

// JS task
gulp.task('js', function() {
  return gulp.src('project processing/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('web/js'))
  .pipe(livereload())
})

// Compress task
gulp.task('compress', function() {
  return gulp.src('web/**/*.*')
  .pipe(zip('website.zip'))
  .pipe(gulp.dest('.'))
  .pipe(notify('Files are Compressed'))
})

// Watch task
gulp.task('watch', function() {
  //require('./server.js');
  livereload.listen();
  gulp.watch('project processing/*.pug', gulp.series('html'));
  gulp.watch('project processing/SCSS/*.scss', gulp.series('css'));
  gulp.watch('project processing/JS/*.js', gulp.series('js'));
  //gulp.watch('dist/**/*.*', ['compress']);
})  