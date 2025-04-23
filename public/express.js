const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 제공
app.set("view engine", "ejs"); // EJS 설정
app.set("views", path.join(__dirname, "views")); // 뷰 폴더 설정

// 로그인 페이지 제공
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// 로그인 요청 처리 후 결과 페이지 출력
app.get("/login", (req, res) => {
  const { userid, userpw } = req.query;
  res.render("result", { userid, userpw });
});

app.listen(3000, () => {
  console.log("서버 실행 중...");
});
