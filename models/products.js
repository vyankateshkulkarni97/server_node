const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    category: {
      type: ObjectId,
      ref: "categories",
    },
    material: {
      type: String,
      required: true,  // Example: Leather, Fabric, etc.
    },
    color: {
      type: String,
      required: true,  // Example: Red, Black, etc.
    },
    dimensions: {
      type: String,
      required: true,  // Example: 30cm x 20cm x 10cm
    },
    weight: {
      type: Number,
      required: true,  // Example: 1.2 kg
    },
    images: {
      type: Array,
      required: true,
    },
    offer: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log("==============Mongodb Database Connected Successfully=============="))
  .catch((err) => console.log("Database Not Connected!!!", err));

  const insertProducts = async () => {
    try {
      const products = [
    {
      "name": "Classic Leather Purse",
      "description": "A luxurious leather purse, perfect for everyday use.",
      "price": 120.99,
      "quantity": 50,
      "sold": 10,
      "category": "64f0a31d24fbe38bc7123456",
      "material": "Leather",
      "color": "Black",
      "dimensions": "25cm x 15cm x 10cm",
      "weight": 0.5,
      "images": ["3.jpg", "4.jpg"],
      "offer": "10% off",
    },
    {
      "name": "Stylish Fabric Tote",
      "description": "A spacious and trendy tote bag made of durable fabric.",
      "price": 59.99,
      "quantity": 30,
      "sold": 5,
      "category": "64f0a31d24fbe38bc7123457",
      "material": "Fabric",
      "color": "Red",
      "dimensions": "30cm x 20cm x 15cm",
      "weight": 0.7,
      "images": ["1.jpg", "2.jpg"],
      "offer": null,
    },
    {
      "name": "Designer Leather Satchel",
      "description": "A premium leather satchel with a modern design.",
      "price": 189.99,
      "quantity": 20,
      "sold": 7,
      "category": "64f0a31d24fbe38bc7123458",
      "material": "Leather",
      "color": "Brown",
      "dimensions": "28cm x 18cm x 12cm",
      "weight": 0.9,
      "images": ["5.jpg", "6.jpg"],
      "offer": "15% off",
    },
    {
      "name": "Compact Travel Bag",
      "description": "A small, lightweight bag ideal for short trips.",
      "price": 49.99,
      "quantity": 100,
      "sold": 15,
      "category": "64f0a31d24fbe38bc7123459",
      "material": "Polyester",
      "color": "Blue",
      "dimensions": "20cm x 10cm x 8cm",
      "weight": 0.3,
      "images": ["7.jpg", "8.jpg"],
      "offer": null
    },
    {
      "name": "Luxury Chain Purse",
      "description": "A stylish purse with an elegant chain strap.",
      "price": 225.99,
      "quantity": 15,
      "sold": 3,
      "category": "64f0a31d24fbe38bc7123460",
      "material": "Suede",
      "color": "Pink",
      "dimensions": "22cm x 14cm x 9cm",
      "weight": 0.6,
      "images": ["2.jpg", "5.jpg"],
      "offer": "20% off"
    },
    {
      "name": "Eco-Friendly Handbag",
      "description": "A handbag made from sustainable materials.",
      "price": 79.99,
      "quantity": 40,
      "sold": 20,
      "category": "64f0a31d24fbe38bc7123461",
      "material": "Jute",
      "color": "Green",
      "dimensions": "25cm x 20cm x 12cm",
      "weight": 0.5,
      "images": ["3.jpg", "6.jpg"],
      "offer": "5% off"
    },
    {
      "name": "Minimalist Clutch",
      "description": "A sleek and minimalist clutch for evening outings.",
      "price": 99.99,
      "quantity": 35,
      "sold": 10,
      "category": "64f0a31d24fbe38bc7123462",
      "material": "Leather",
      "color": "White",
      "dimensions": "18cm x 10cm x 5cm",
      "weight": 0.2,
      "images": ["1.jpg", "4.jpg"],
      "offer": "10% off"
    },
    {
      "name": "Quilted Crossbody Bag",
      "description": "A versatile crossbody bag with a quilted design.",
      "price": 149.99,
      "quantity": 25,
      "sold": 8,
      "category": "64f0a31d24fbe38bc7123463",
      "material": "Leather",
      "color": "Navy Blue",
      "dimensions": "20cm x 15cm x 8cm",
      "weight": 0.7,
      "images": ["8.jpg", "2.jpg"],
      "offer": "15% off"
    },
    {
      "name": "Bold Metallic Purse",
      "description": "A bold metallic purse to make a statement.",
      "price": 199.99,
      "quantity": 20,
      "sold": 4,
      "category": "64f0a31d24fbe38bc7123464",
      "material": "Metallic Leather",
      "color": "Silver",
      "dimensions": "26cm x 18cm x 11cm",
      "weight": 0.9,
      "images": ["6.jpg", "8.jpg"],
      "offer": "20% off"
    },
    {
      "name": "Retro Printed Shoulder Bag",
      "description": "A shoulder bag with a fun retro print.",
      "price": 69.99,
      "quantity": 45,
      "sold": 10,
      "category": "64f0a31d24fbe38bc7123465",
      "material": "Canvas",
      "color": "Multicolor",
      "dimensions": "27cm x 18cm x 12cm",
      "weight": 0.4,
      "images": ["4.jpg", "2.jpg"],
      "offer": null
    }
  ]
  
  await Product.insertMany(products);
  // console.log('Products inserted successfully');
  mongoose.connection.close();  // Close the connection after insertion
  } catch (error) {
  console.log('Error inserting products:', error);
  }
  };
  
  module.exports = Product;
  // insertProducts();
