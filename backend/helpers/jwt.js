const { expressjwt } = require('express-jwt');
const secret = process.env.secret;
const api = process.env.API_URL;

const isRevoked = async (req, token) => {
  const {payload} = token
  if (!payload.isAdmin) {
    return true
  } 

  return false;
}

const authJwt = expressjwt({
  secret,
  algorithms: ['HS256'],
  isRevoked: isRevoked,
}).unless({
  path: [
    { url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'], },
    { url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS'], },
    `${api}/users/login`,
    `${api}/users/register`,
  ]
})

module.exports = authJwt
