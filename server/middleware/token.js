// const jwt = require("jsonwebtoken");

// module.exports = {
//   authToken: function (req, res, next) {
//     const header = req.headers.authorization;
//     console.log("미들웨어 진입");
//     console.log("req.headers.authorization:", req.headers.authorization);

//     const accessToken = header.split(" ")[1];

//     if (accessToken === "null") {
//       res.status(401).send("Not Authorized");
//     } else {
//       jwt.verify(accessToken, "secretKey", (err, userId) => {
//         if (err) {
//           res.status(403).send("Forbidden");
//         } else {
//           req.userId = userId;
//           next();
//         }
//       });
//     }
//   },
// };
const { user } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req, res, next) => {
  // console.log('Passed isAuth ', req);
  console.log("req.headers middleware:", req.headers);
  const token = req.headers.authorization.split(" ")[1];
  console.log("token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Request no token" });
  }
  try {
    jwt.verify(token, process.env.ACCESS_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized Request111" });
      }
      const userInfo = await user.findOne({ where: { id: decoded.id } });
      if (!userInfo) {
        return res.status(401).json({ message: "Unauthorized Request222" });
      }
      req.userId = decoded.id;
      return next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = isAuth;
