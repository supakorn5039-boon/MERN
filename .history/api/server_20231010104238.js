const express = require("express");

// const productRouters = require("./Routes/product");
// const authRouters = require("./Routes/auth");

const app = express();

//route 1

// app.get("/product", (req, res) => {
//   res.send("Hello product page");
// });

//Route 2

// app.use("/api", productRouters);
// app.use("/api", authRouters);

// Route 3

app.listen(3000, () => console.log("Server is Running 3000"));
