require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, {
      expiresIn: "2h",
    });
  },
  sendAccessToken: (res, accessToken) => {
    return res
      .status(200)
      .cookie("jwt", accessToken, {
        Domain: "localhost",
        Path: "/",
        SameSite: "None",
        httpOnly: true,
        secure: true,
      })
      .json({ message: "ok" });
  },
  isAuthorized: (req) => {
    // console.log(req.cookies); // ---> { jwt, Domain, Path, SameSite }
    // console.log("req.cookies.jwt:::", req.cookies.jwt);  ---> 들어와 있음
    const token = req.cookies.jwt;
    if (!token) {
      return null;
    }
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
