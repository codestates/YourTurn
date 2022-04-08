require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: data => {
    // Access token으로 sign합니다. / 토큰을 리턴
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  },
  sendAccessToken: (res, accessToken) => {
    // JWT 토큰을 쿠키로 전달합니다.
    res.cookie('jwt', accessToken, {
      httpOnly: true,
    });
  },
  isAuthorized: req => {
    // JWT 토큰 정보를 받아서 검증합니다.

    // console.log('req.cookies.jwt---------', req.cookies.jwt);
    const token = req.cookies.jwt;
    try {
      const decoded = verify(token, process.env.ACCESS_SECRET);
      // console.log('decoded.email------------', decoded.email);
      return { userInfo: decoded.email };
    } catch (err) {
      console.log('err----------', err);
    }
  },
};
