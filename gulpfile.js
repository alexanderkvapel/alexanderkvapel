
const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mediaquery = require('postcss-combine-media-query');
const cssnano = require('cssnano');
const htmlMinify = require('html-minifier');
const gulppug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000,
    ui: {
      port: 3001
    }
  });
}

function js() {
  return gulp.src('src/scripts/**/*.js')
             .pipe(gulp.dest('dist/scripts'))
             .pipe(browserSync.reload({stream: true}));
}

// function html() {
//   const options = {
//     removeComments: true,
//     removeRedundantAttributes: true,
//     removeScriptTypeAttributes: true,
//     removeStyleLinkTypeAttributes: true,
//     sortClassName: true,
//     useShortDoctype: true,
//     collapseWhitespace: true,
//     minifyCSS: true,
//     keepClosingSlash: true
//   };
//   return gulp.src('src/**/*.html')
//              .pipe(plumber())
//              .on('data', function(file) {
//                const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
//                return file.contents = buferFile
//               })
//              .pipe(gulp.dest('dist/'))
//              .pipe(browserSync.reload({stream: true}));
// }

// function css() {
//   const plugins = [
//     autoprefixer(),
//     mediaquery(),
//     cssnano()
//   ];
//   return gulp.src('src/**/*.css')
//              .pipe(plumber())
//              .pipe(concat('bundle.css'))
//              .pipe(postcss(plugins))
//              .pipe(gulp.dest('dist/'))
//              .pipe(browserSync.reload({stream: true}));
// }

function pug() {
  return gulp.src('src/pages/**/*.pug')
        .pipe(gulppug())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function scss() {
  const plugins = [
    autoprefixer(),
    mediaquery(),
    cssnano()
  ];
  // return gulp.src('src/**/*.scss')
  return gulp.src('src/layouts/default.scss')
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function fonts() {
  return gulp.src('src/fonts/**/*.{woff2,woff,ttf}')
             .pipe(gulp.dest('dist/fonts'))
             .pipe(browserSync.reload({stream: true}));
}

function icons() {
  return gulp.src('src/icons/**/*.{ico,svg,png}', {encoding: false})
             .pipe(gulp.dest('dist/icons'))
             .pipe(browserSync.reload({stream: true}));
}

function images() {
  return gulp.src('src/images/**/*.{jpg,png,gif,ico,webp,avif}', {encoding: false})
             .pipe(gulp.dest('dist/images'))
             .pipe(browserSync.reload({stream: true}));
}

function svg() {
  return gulp.src('src/svg/**/*.svg', {encoding: false})
             .pipe(gulp.dest('dist/svg'))
             .pipe(browserSync.reload({stream: true}));
}
function clean() {
  return del('dist');
}

function watchFiles() {
  gulp.watch(['src/scripts/**/*.js'], js);
  gulp.watch(['src/**/*.pug'], pug);
  gulp.watch(['src/**/*.scss'], scss);
  gulp.watch(['src/fonts/**/*.{css,woff2,woff,ttf}'], fonts);
  gulp.watch(['src/icons/**/*.{ico,svg,png}'], icons);
  gulp.watch(['src/images/**/*.{jpg,png,gif,ico,webp,avif}'], images);
  gulp.watch(['src/svg/**/*.svg'], svg);
}

const build = gulp.series(clean, gulp.parallel(pug, scss, js, fonts, icons, images, svg));
const watchapp = gulp.parallel(build, watchFiles, serve);

exports.serve = serve;
exports.clean = clean;
exports.js = js;
exports.pug = pug;
exports.scss = scss;
// exports.html = html;
// exports.css = css;
exports.fonts = fonts;
exports.icons = icons;
exports.images = images;
exports.svg = svg;

exports.build = build;
exports.watchapp = watchapp;

exports.default = watchapp;
