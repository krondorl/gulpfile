# gulpfile
My Gulp workflow, 2016-09-01

Using:
* Gulp
* Inline image
* Sass
* PostCSS
  * Autoprefixer
  * CSSNano
* Babel
* Babel Preset 2015

## Install process
`npm i gulp gulp-inline-image gulp-postcss gulp-sass gulp-babel babel-preset-es2015 autoprefixer cssnano`

## Directories
* `./scss`, source styles
* `./js`, source scripts
* `./dist`, compiled assets

## Watch
`gulp`

## Style processing

Steps:

1. Inline image
2. Sass
3. PostCSS