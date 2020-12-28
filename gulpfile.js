const { src, dest, watch, series, parallel } = require('gulp')
const scss = require('gulp-sass')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const fileinclude = require('gulp-file-include')
const svgSprite = require('gulp-svg-sprite')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')
const del = require('del')
const webpackStream = require('webpack-stream')
const uglify = require('gulp-uglify-es').default

const clean = () => (
    del(['./dist'])
)

const fonts = () => {
    src('./src/fonts/**.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./dist/fonts'))

    return src('./src/fonts/**.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./dist/fonts'))
}

const scripts = () => {
    return src('./src/js/index.js')
        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: 'index.js',
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            },
        }))
        .on('error', function (err) {
            console.error('WEBPACK ERROR', err);
            this.emit('end');
        })

        .pipe(sourcemaps.init())
        .pipe(uglify().on("error", notify.onError()))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/js'))
        .pipe(browserSync.stream());
}

const svgSprites = () => (
    src(['./src/img/**.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('./dist/img'))
)

const styles = () => (
    src('./src/scss/index.scss')
        .pipe(sourcemaps.init())
        .pipe(scss({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/css'))
        .pipe(browserSync.stream())
)

const imgToDist = () => (
    src(['./src/img/**.jpg', './src/img/**.jpeg', './src/img/**.png'])
        .pipe(dest('./dist/img'))
)

const htmlInclude = () => (
    src('./src/index.html')
        .pipe(fileinclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'))
        .pipe(browserSync.stream())
)

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })

    watch('./src/scss/**/*.scss', styles)
    watch('./src/index.html', htmlInclude)
    watch(['./src/img/**.jpg', './src/img/**.jpeg', './src/img/**.png'], imgToDist)
    watch(['./src/img/**.svg'], svgSprites)
    watch(['./src/fonts/**.ttf'], fonts)
    watch('./src/js/**/*.js', scripts)
}

exports.styles = styles
exports.watchFiles = watchFiles

exports.default = series(clean, parallel(htmlInclude, scripts, fonts, imgToDist, svgSprites), styles, watchFiles)

const stylesBuild = () => {
    return src('./src/scss/**/*.scss')
        .pipe(scss({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('./dist/css/'))
}

const scriptsBuild = () => {
    return src('./src/js/index.js')
        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: 'index.js',
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            },
        }))
        .on('error', function (err) {
            console.error('WEBPACK ERROR', err);
            this.emit('end');
        })
        .pipe(uglify().on("error", notify.onError()))
        .pipe(dest('./dist/js'))
}

exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, imgToDist, svgSprites), stylesBuild);
