require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    // Access token으로 sign / 토큰을 리턴 (공식 문서의 Synchronous한 방법)
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },
  sendAccessToken: (res, accessToken) => {
    // JWT 토큰을 쿠키로 전달
    return res
      .status(200)
      .cookie("jwt", accessToken, { httpOnly: true, secure: true, sameSite: "none" })
      .json({ data: { accessToken }, message: "ok" });
  },
  isAuthorized: (req) => {
    // JWT 토큰 정보를 받아서 검증
    const authorization = req.headers.cookie;

    if (!authorization) {
      return null;
    }
    const token = authorization.split(";")[0].split("=")[1];

    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      console.log(err);
    }
  },
};
