module.exports = (req, res) => {
  // 로그아웃 로직
<<<<<<< HEAD
  return res.status(205).send("successfully signed out!");
=======
  res.status(205).cookie("jwt", null).send("Logged out successfully");
>>>>>>> ad98617579016bba0eb08bfe6905fce0a798c04c
};
