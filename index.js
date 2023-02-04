const { request } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

// app.get('/', (req, res) =>
//  res.sendFile(__dirname+"/index.html")
// )

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.sendFile(__dirname);
// });


app.post("/bmi_result", (req, res) => {
  let w = Number(req.body.weight);
  console.log(w);
  let h = Number(req.body.height);
  console.log(h);
  let result = w / Math.pow(h, 2);
  res.send("Your BMI is "+result);
});

app.listen(port, hostname, function () {
  console.log("listening on port 3000");
});
