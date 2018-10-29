var config = require('./');

module.exports = {
    watch: config.srcDir + '/templates/**/*.{html,njk}',
    src: [config.destDir],
    //browser: 'chrome',
    port: 8888
};