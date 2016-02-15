'use strict';

var spritesmith = require("gulp.spritesmith"), //init plugin

// build sprite task
gulp.task('sprites:build', function () {
	var spriteData =
		gulp.src('src/img/**/*.png') //path to source
			.pipe(spritesmith({
				imgName: 'sprite.png', //sprite file name
				cssName: 'sprite-position.less', //sprite less name where are stored image position
				imgPath: 'images/sprite.png', //path to sprite file
				cssFormat: 'less', //css format
				cssTemplate: 'template.mustache', //mask file
				cssVarMap: function(sprite) {
					sprite.name = 's-' + sprite.name //sprite name format, ex. 's-logo' for logo.png
				}
			}));
		spriteData.img
			.pipe(gulp.dest('build/img/')); //path to save sprite file on build
		spriteData.css
			.pipe(gulp.dest('build/css/')); //path to save style file on build
});