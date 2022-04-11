module.exports = (req, res) => {
  // 로그아웃 로직
  return res.status(205).send("successfully signed out!");
};
