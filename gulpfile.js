var gulp = require('gulp');
var load = require('gulp-load-plugins')();
var browser = require('browser-sync').create();


gulp.task('sass',function(done){
	gulp.src('./src/css/**')
	.pipe(load.sass())
	.pipe(gulp.dest('./dist/css/'))
	done()
})


gulp.task('html',function(done){
	gulp.src('./src/html/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest("./dist/html/"))
	done()
})

gulp.task('js',function(done){
	gulp.src('./src/js/*.js')
	.pipe(load.uglify())
	.pipe(gulp.dest("./dist/js"))
	done()
})


gulp.task('server',gulp.series(gulp.parallel('html','sass','js'),function(done){

	browser.init({
		server:'./dist/',
		port:80
	})

	gulp.watch('./src/',gulp.series(gulp.parallel('html','sass','js'),function(done){
		browser.reload()
		done()
	}))
	
	done()
}))
