const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  detail: {
    type: String,
  },
});
