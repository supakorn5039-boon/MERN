const express = require("express");
const morgan = require("morgan");

const { readdirSync, read } = require("fs");

// const productRouters = require("./Routes/product");
// const authRouters = require("./Routes/auth");

const app = express();

app.use(morgan("dev"));

//route 1

// app.get("/product", (req, res) => {
//   res.send("Hello product page");
// });

//Route 2
// app.use("/api", productRouters);
// app.use("/api", authRouters);

//Route 3 { Read auto in Route folder }
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(3000, () => console.log("Server is Running 3000"));
