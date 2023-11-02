const mongoose = require("mongoose");
import { Timestamp } from "../node_modules/bson/src/timestamp";

const productSchema = mongoose.Schema(
  {
    name: String,
    detail: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);
