require("dotenv").config();
const fs = require("fs");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const authRouter = require("./router/auth");
const mypostRouter = require("./router/mypost");
const profileRouter = require("./router/profile");
const signinRouter = require("./router/signin");
const signoutRouter = require("./router/signout");
const signupRouter = require("./router/signup");
const teamRouter = require("./router/team");
const articleRouter = require("./router/article");

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    credentials: true,
      optionsSuccessStatus: 200

  })
);


app.use(cookieParser());
app.get("/", (req,res) => console.log("hello"));
app.use("/user/auth", authRouter);
app.use("/user/mypost", mypostRouter);
app.use("/user/profile", profileRouter);
app.use("/user/signin", signinRouter);
app.use("/user/signout", signoutRouter);
app.use("/user/signup", signupRouter);
app.use("/team", teamRouter);
app.use("/article", articleRouter);

const HTTPS_PORT = process.env.HTTPS_PORT || 80;

// 인증서 파일들이 존재하는 경우에만 http 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = http.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("https server runnning"));
} else {
  server = app.listen(HTTPS_PORT, () => console.log("http server runnning"));
}

module.exports = server;
