module.exports = (req, res) => {
  // TODO: 로그아웃 로직을 작성합니다.

  res
    .status(205)
    .cookie("jwt", null, {
      Domain: "localhost",
      Path: "/",
      SameSite: "None",
      httpOnly: true,
      secure: true,
    })
    .send("Logged out successfully");
};
