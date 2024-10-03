const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    cName: {
      type: String,
      required: true,
    },
    cDescription: {
      type: String,
      required: true,
    },
    cImage: {
      type: String,
    },
    cStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const categoryModel = mongoose.model("categories", categorySchema);

const insertcategory = async () => {
  try {
    const category = [
  {
    "cName": "Leather Bags",
    "cDescription": "High-quality leather bags for everyday use and special occasions.",
    "cImage": "1.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Fabric Totes",
    "cDescription": "Durable and spacious fabric totes perfect for shopping or casual outings.",
    "cImage": "2.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Designer Satchels",
    "cDescription": "Elegant designer satchels for fashion-conscious individuals.",
    "cImage": "3.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Travel Bags",
    "cDescription": "Lightweight and compact bags designed for short trips and travel.",
    "cImage": "4.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Chain Purses",
    "cDescription": "Stylish chain purses perfect for evening events and casual outings.",
    "cImage": "5.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Eco-Friendly Bags",
    "cDescription": "Bags made from sustainable and eco-friendly materials.",
    "cImage": "6.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Clutches",
    "cDescription": "Minimalist clutches for a sleek, elegant look.",
    "cImage": "7.jpg",
    "cStatus": "active"
  },
  {
    "cName": "Crossbody Bags",
    "cDescription": "Versatile crossbody bags perfect for hands-free convenience.",
    "cImage": "8.jpg",
    "cStatus": "active"
  }
]

await categoryModel.insertMany(category);
// console.log('Category inserted successfully');
mongoose.connection.close();  // Close the connection after insertion
} catch (error) {
console.log('Error inserting Categorys:', error);
}
};


module.exports = categoryModel;
// insertcategory();