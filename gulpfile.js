const {src, dest, task, watch } = require('gulp');


task('components', function(cb){
    return (
        src('./IGP-Framework/components/*.js').pipe(dest('./src/components')),
        src('./IGP-Framework/components/*/*.js').pipe(dest('./src/components'))
    )
})

task('styles', function(cb) {
    return (
        src('./IGP-Framework/stylesheets/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/stylesheets/*/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/stylesheets/*/*/*.scss').pipe(dest('./src/stylesheets'))
    )
})

task('templates', function(cb){
    return src('./IGP-Framework/templates/*.js').pipe(dest('./src/templates'))
})

task('utils', function(cb){
    return src('./IGP-Framework/utils/*.js').pipe(dest('./src/utils'))
})

task('all', function(cb) {
    return(
        src('./IGP-Framework/components/*.js').pipe(dest('./src/components')),
        src('./IGP-Framework/components/*/*.js').pipe(dest('./src/components')),
        src('./IGP-Framework/stylesheets/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/stylesheets/*/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/stylesheets/*/*/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/templates/*.js').pipe(dest('./src/templates')),
        src('./IGP-Framework/utils/*.js').pipe(dest('./src/utils'))
    )
})