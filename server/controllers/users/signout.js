module.exports = (req, res) => {
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
