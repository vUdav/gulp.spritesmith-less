# Mask, mixins and settings [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith) plugin for Less
* **gulpfile.js** - Gulp config file
* **mixins.less** - Less mixins for use sprite on styles
* **template.mustache** - mask for save image parametrs

## Mixins
* `.spriteWidth(@sprite)` - return *width* property with value
* `.spriteHeight(@sprite)` - return *height* property with value
* `.spritePosition(@sprite)` - return *background-position* property with value
* `.spriteImage(@sprite)` - return *background-image* property with value
* `.sprite(@sprite)` - return all sprite mixins property with value

## Example
1. Add your png file to source images dir (ex. logo.png and icon.png)
2. Add styles to your less file:
    .logo {
        .sprite(@s-logo);
    }
    .icon {
        .sprite(@s-icon);
    }