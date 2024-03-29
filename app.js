const express = require("express");
const { get } = require("express/lib/response");
const app = express();
const path = require("path");

//const publicPath = path.resolve(__dirname, "./public");

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => console.log("servidor funcionando"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/registercompleted", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login",(req,res)=>{

  res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.post("/loginh",(req,res)=>{

  res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
