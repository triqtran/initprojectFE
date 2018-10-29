var config = require('./');

module.exports = {
    autoprefixer: { browsers: ['last 2 version'] },
    src: config.srcDir + '/css/scss/app',
    dest: config.destDir + '/css',
    pattern: "/**/*.{sass,scss}",
    settings: {
        indentedSyntax: true, // Enable .sass syntax!
        imagePath: 'images' // Used by the image-url helper
    }
};