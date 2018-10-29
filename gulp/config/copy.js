var config = require('./');

module.exports = {
    src: [
        config.srcDir + '/fonts/**/*.*',
        config.srcDir + '/images/**/*.*',
        config.srcDir + '/js/*.*',
        config.srcDir + '/css/**/*.css'
    ],
    dest: config.destDir,
    options: {
        prefix: 1
    }
};