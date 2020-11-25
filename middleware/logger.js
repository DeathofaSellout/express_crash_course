//bring in moment
const moment = require('moment');
//middleware function: takes in req, res, and then next
const logger = (req, res, next) => {
    //http, host, then the page
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl
        }: ${moment().format()}`
    );
    next();
};

module.exports = logger;