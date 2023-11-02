const express = require("express");

const productRouters = require("./Routes/product");
const app = express();
const authROuters = require("./Routes/auth");

//route 1
// app.get("/product", (req, res) => {
//   res.send("Hello product page");
// });

//Route 2

app.use("/api", productRouters);

app.listen(3000, () => console.log("Server is Running 3000"));
