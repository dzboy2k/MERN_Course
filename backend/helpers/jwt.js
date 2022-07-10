const { expressjwt } = require('express-jwt');
const secret = process.env.secret;

const authJwt = expressjwt({
    secret,
    algorithms: ['HS256'],
});

module.exports = authJwt;
