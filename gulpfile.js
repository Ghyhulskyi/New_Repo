var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var pug = require('gulp-pug');
//var sass = require('gulp-sass');
//var gulp = require('sass');
//var gulp = require('watch');

gulp.task('sprite', function(){
	var spriteData = gulp.src(['src/img/icons/*.*'])
	.pipe(spritesmith({
		imgName:'sprite.png',
		cssName:'_sprite.scss',
		imgPath:'../img/sprite.png',
		cssFormat:'scss',
		padding: 16
	}));
	var imgStream = spriteData.img.pipe(gulp.dest('app/img'));
	var cssStream = spriteData.css.pipe(gulp.dest('src/scss/components/'));
	return(imgStream, cssStream);
});
 
gulp.task('pug', function(){
	return gulp.src(['src/pug/**/*.pug', '!src/pug/**/*_*.pug'])
	.pipe(pug({pretty:'\t'}))
	//.on("error", notify.onError())
	.pipe(gulp.dest('app'));
});

// gulp.task('sass', function(){
// 	gulp.src('.src/scss/**/*.scss')
// 	//.pipe(sass(.on("error", notify.onError())))
// 	.pipe(gulp.dest('app/css'))
// });

// gulp.task('watch', ['pug','sass','scipts','browser-sync'],function(){
// 	gulp.watch('src/pug/**/*.pug',['pug']);
// 	gulp.watch('app/*.html',browserSync.reload);
// });