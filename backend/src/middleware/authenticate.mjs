import config from '../config/config.mjs'
import jwt from 'jsonwebtoken'


const extractToken = (req) => {
    const authHeader = req.headers['authorization'];  
    const pattern = new RegExp('^bearer', 'i');
    const bearer = pattern.test(authHeader);
    return bearer ? authHeader : authHeader;
  }
  
  const authenticate = (req, res, next) => {
    const token = extractToken(req);
    try {
        jwt.verify(token, config.ACCESS_TOKEN_SECRET);
        next();
    } catch (e) {
        console.log(e)
        res.status(401).send('Not authorised!');
    }
  }

  export { authenticate }