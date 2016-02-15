# Mask, mixins and settings gulp.spritesmith plugin for Less
* **gulpfile.js** - Gulp config file
* **mixins.less** - Less mixins for use sprite on styles
* **template.mustache** - mask for save image parametrs

## Mixins
* `.spriteWidth(@sprite)` - return __width__ property with value
* `.spriteHeight(@sprite)` - return __height__ property with value
* `.spritePosition(@sprite)` - return __background-position__ property with value
* `.spriteImage(@sprite)` - return __background-image__ property with value
* `.sprite(@sprite)` - return all sprite mixins property with value

## Example
1. Add your png file to source images dir (ex. logo.png and icon.png)
2. Add styles to your less file:
`.logo {
	.sprite(@s-logo);
}
.icon {
	.sprite(@s-icon);
}`