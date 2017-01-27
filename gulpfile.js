const gulp = require('gulp');
const browserSync = require('browser-sync');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const gulpsync = require('gulp-sync')(gulp);
const del = require('del');
const webpack = require('webpack-stream');
const named = require('vinyl-named');
const plugins = require('gulp-load-plugins')();

// Pug to Html
gulp.task('pug', () => {
  return gulp.src(['src/*.pug'])
  .pipe(plugins.plumber({ errorHandler: plugins.notify.onError() }))
  .pipe(plugins.pug({ pretty: true }))
  .pipe(gulp.dest('./'));
});

// Scss to Css
gulp.task('cleanCss', () => {
  return del('./css');
});

gulp.task('scss', ['cleanCss'], () => {
  return gulp.src('src/style.scss')
  .pipe(plugins.plumber({ errorHandler: plugins.notify.onError() }))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.scss())
  .pipe(plugins.autoprefixer([
    'last 2 Chrome versions',
    'last 2 Firefox versions',
    'last 2 Opera versions',
    'last 2 Safari versions',
    'Explorer >= 10',
    'last 2 Edge versions',
    ],
    { cascade: false }
  ))
  .pipe(plugins.csscomb('./.csscomb.json'))
  .pipe(plugins.cssnano())
  .pipe(plugins.rename({suffix: '.min'}))
  .pipe(plugins.sourcemaps.write())
  .pipe(gulp.dest('./css'))
});

// ES2016 to common JS
// TODO: need stop this task after its finish
gulp.task('cleanScript', () => {
  return del('./js');
});

gulp.task('script', () => {
  return gulp.src(['src/index.js', 'src/catalog.js', 'src/common.js'])
  .pipe(plugins.plumber({
    errorHandler: plugins.notify.onError(err => ({
      title: 'Webpack',
      message: err.message
    }))
  }))
  .pipe(named())
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(plugins.rename({suffix: '.min'}))
  .pipe(gulp.dest('./js'));
});

// Html and Css linters
gulp.task('htmllint', () => {
  return gulp.src('./*.html')
  .pipe(plugins.htmlhint.reporter('htmlhint-stylish'))
  .pipe(plugins.htmlhint.failReporter({ suppress: true }))
});

gulp.task('csslint', () => {
  return gulp.src('./css/main.css')
  .pipe(plugins.csslint())
  .pipe(plugins.csslint.reporter())
});

// Create svg-sprite
gulp.task('cleanIcon', () => {
  return del('./icon');
});

gulp.task('svgSprite', ['cleanIcon'], () => {
  return gulp.src(['src/common/icon/*', 'src/blocks/*/icon/*'])
    .pipe(plugins.svgSprites({
      cssFile: 'scss/_sprite.scss',
      preview: false,
      layout: 'horizontal',
      padding: 0,
      svg: { sprite: '../../icon/sprite.svg' },
      templates: { css: require('fs').readFileSync('src/common/scss/_sprite-template.scss', 'utf-8') }
    }))
    .pipe(gulp.dest('src/common'));
});

// Image optimizations
gulp.task('cleanImg', () => {
  return del('./img');
});

gulp.task('img', ['cleanImg'], () => {
  return gulp.src(['src/common/img/*', 'src/blocks/*/img/*'])
  .pipe(plugins.imagemin([
    plugins.imagemin.gifsicle({
      interlaced: true,
      optimizationLevel: 3
    }),
    imageminJpegRecompress({
      loops: 4,
      min: 50,
      max: 80,
      quality: 'high',
      strip: true,
      progressive: true
    }),
    imageminPngquant({quality: '50-80'}),
    plugins.imagemin.svgo({removeViewBox: true})
  ]))
  .pipe(gulp.dest('./img'));
});

// Server
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './',
      index: 'index.html'
    },
    open: false
  });
});

// Watch mode
// TODO: previously need start task 'script'
gulp.task('default', gulpsync.sync(['img', 'svgSprite', 'pug', 'scss', 'browserSync']), () => {
  gulp.watch(['src/common/icon/*', 'src/blocks/*/icon/*'], ['svgSprite', 'scss', browserSync.reload]);
  gulp.watch(['src/common/img/*', 'src/blocks/*/img/*'], ['img', browserSync.reload]);
  gulp.watch(['src/*.pug', 'src/blocks/**/*.pug'], ['pug', browserSync.reload]);
  gulp.watch(['src/*.scss', 'src/common/scss/*.scss', 'src/blocks/*/*.scss'], ['scss', browserSync.reload]);
  gulp.watch(['src/*.js', 'src/common/js/*.js', 'src/blocks/*/*.js'], ['script', browserSync.reload]);
});
