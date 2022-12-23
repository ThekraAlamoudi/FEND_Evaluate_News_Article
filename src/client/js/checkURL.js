//Using valid-url package
const validUrl = require('valid-url');
const checkUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    checkUrl,
};