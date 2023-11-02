const express = require("express");
const { readdirSync } = require("fs");

const app = express();

//route 1

// app.get("/product", (req, res) => {
//   res.send("Hello product page");
// });

//Route 2

// const productRouters = require("./Routes/product");
// const authRouters = require("./Routes/auth");

// app.use("/api", productRouters);
// app.use("/api", authRouters);

// Route 3

readdirSync("./Routes").map((r) => app.use("/api", require("./Routes" + r)));

app.listen(3000, () => console.log("Server is Running 3000"));
