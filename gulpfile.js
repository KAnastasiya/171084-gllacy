const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const webpack = require('webpack-stream');
const named = require('vinyl-named');
const buffer = require('vinyl-buffer');
const merge = require('merge-stream');
const plugins = require('gulp-load-plugins')();

const SRC = 'src';
const PUBLIC = './';


// Pug
gulp.task('pug', (done) => {
  gulp
    .src(`${SRC}/*.pug`)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError()
    }))
    .pipe(plugins.pug())
    .pipe(gulp.dest(PUBLIC));
  done();
});


// Styles
gulp.task('scss', (done) => {
  gulp
    .src(`${SRC}/*.scss`)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError()
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer(
      ['last 2 versions', '> 1%'],
      { cascade: false }
    ))
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(PUBLIC));
  done();
});


// Scripts
gulp.task('js', () =>
  gulp
    .src(`${SRC}/*.js`)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError(err => ({
        title: 'Webpack',
        message: err.message
      }))
    }))
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(PUBLIC))
);


// Images
gulp.task('img', () =>
  gulp
    .src([`${SRC}/blocks/**/img/*.*`, `${SRC}/common/img/*.*`])
    .pipe(plugins.imagemin([
      imageminJpegRecompress({
        loops: 4,
        min: 50,
        max: 65,
        quality: 'high',
        strip: true,
        progressive: true
      }),
      imageminPngquant({quality: '50-80'})
    ]))
    .pipe(gulp.dest(`${PUBLIC}/img`))
);


// SVG-sprite
gulp.task('svg-sprite', () =>
  gulp
    .src(`${SRC}/blocks/**/icon/*.*`)
    .pipe(plugins.svgSprites({
      cssFile: 'sprite.scss',
      preview: false,
      layout: 'horizontal',
      padding: 0,
      svg: { sprite: '../../sprite.svg' },
      templates: {
        css: require('fs').readFileSync('src/common/scss/sprite-template.scss', 'utf-8')
      }
    }))
    .pipe(gulp.dest(`${SRC}/common/scss`))
);


// Copy sprite
gulp.task('copySvgSprite', () =>
  gulp
    .src([`${SRC}/sprite.svg`])
    .pipe(gulp.dest(PUBLIC))
);


// Copy all
gulp.task('copy', gulp.parallel('copySvgSprite'));


// Clean
gulp.task('cleanImg', () => del(`${PUBLIC}/img`));
gulp.task('clean', gulp.parallel('cleanImg'));


// Server
gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: PUBLIC,
      index: 'index.html'
    },
    port: 8800,
    open: false,
    reloadOnRestart: true,
  });
});


// Watch
gulp.task('watch', () => {
  gulp.watch([
    `${SRC}/blocks/**/*.pug`,
    `${SRC}/common/pug/*.pug`,
    `${SRC}/index.pug`
  ]).on('change', gulp.series('pug', browserSync.reload));

  gulp.watch([
    `${SRC}/blocks/**/*.scss`,
    `${SRC}/common/scss/*.scss`,
    `${SRC}/style.scss`
  ]).on('change', gulp.series('scss', browserSync.reload));

  gulp.watch([
    `${SRC}/blocks/**/*.js`,
    `${SRC}/common/js.js`,
    `${SRC}/script.js`
  ]).on('change', gulp.series('js', browserSync.reload));

  gulp.watch([
    `${SRC}/blocks/**/img/*`,
    `${SRC}/common/img/*`
  ]).on('change', gulp.series('cleanImg', 'img', browserSync.reload));

  gulp.watch([
    `${SRC}/blocks/**/icon/*`,
  ]).on('change', gulp.series('svg-sprite', 'copySvgSprite', 'scss', browserSync.reload));
});


// Default
gulp.task('default', gulp.series(
  gulp.parallel('clean', 'svg-sprite'),
  gulp.parallel('img', 'pug', 'scss', 'js', 'copy'),
  gulp.parallel('server', 'watch')
));
