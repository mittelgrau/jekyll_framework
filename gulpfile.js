// gulpfile.js

// Define variables.
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var run = require('gulp-run');

var jsImport = require('gulp-js-import');
var babel = require('gulp-babel');
var del = require('del');
var uglify = require('gulp-uglify');

var paths = {
  scripts: {
    src: 'src/js/*.js',
    dest: './assets/'
  }
};

// Include paths file.

function swallowError(error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}

var clean = function() {
  del(['dist']);
};

function scripts() {
  return gulp.src(paths.scripts.src, {
      sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

gulp.task('import', function() {
  return gulp.src('./src/js/main.js')
    .pipe(jsImport({
      hideConsole: true
    }))
    .pipe(gulp.dest('./src/js/main.js'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts.src, {
      sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('watch', function() {
  gulp.watch('./src/sass_framework/**/*.scss', ['default']);
  gulp.watch('./src/js/*.js', ['default']);
});


gulp.task('sass', function() {
  gulp.src('./src/sass_framework/main.scss')
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: false,
    }))
    .on('error', function(err) {
      notify().write(err);
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleancss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./assets/'));
});


gulp.task('serve', ['sass', 'import', 'scripts'], function() {

});

gulp.task('default', ['serve']);