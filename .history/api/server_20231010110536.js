const express = require("express");
const { readdirSync } = require("fs");

const app = express();

const productRouters = require("./Routes/product");
const authRouters = require("./Routes/auth");

//route 1

// app.get("/product", (req, res) => {
//   res.send("Hello product page");
// });

//Route 2

app.use("/api", productRouters);
app.use("/api", authRouters);

app.listen(3000, () => console.log("Server is Running 3000"));
