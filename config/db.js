const mongoose = require("mongoose");

const Category = require('./models/categories');
const Product = require('./models/products');
const User = require('./models/users');
const Customize = require('./models/customize');
const Order = require('./models/orders');

try {
  mongoose.connect("mongodb://localhost:27017/bags", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
