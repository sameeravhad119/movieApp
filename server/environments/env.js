const { devEnvironment } = require("./dev.env");
const { prodEnvironment } = require("./prod.env");

function getEnvironmentVariables() {

    if (process.env.NODE_ENV === 'production') {
        return prodEnvironment;
    } else {
        return devEnvironment;
    }

}

module.exports = getEnvironmentVariables;