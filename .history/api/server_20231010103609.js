const express = require("express");

const app = express();

//route 1
app.get("/product", (req, res) => {
  res.send("Hello product page");
});

app.listen(3000, () => console.log("Server is Running 3000"));
