const {src, dest } = require('gulp');

exports.default = function() {
    return src('./IGP-Framework/components/*/*.js')
    .pipe(dest('./src/components'))
}