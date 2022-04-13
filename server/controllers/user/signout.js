const {isAuthorized} = require('../tokenFunctions')

module.exports = (req, res) => {
  // 로그아웃 로직
  
  const userInfo = isAuthorized(req)

  try{
    if(!userInfo){
      return res.status(401).send("You're not authorized")
    } else {
      //return res.status(205).cookie("jwt", '').send("Logged out successfully");
      return res.status(205).clearCookie("jwt", {
        sameSite: "None",
        secure: true,
        httpOnly: true,
      }).send("Logged out successfully");
    }
  }catch(err){
    return res.status(500).send("Internal Server Error")
  }
};
