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
    ratingsReviews: [
      {
        review: String,
        user: { type: ObjectId, ref: "users" },
        rating: String,
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    status: {
      type: String,
      required: true, // Example: Available, Out of Stock
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
      "images": ["image1.jpg", "image2.jpg"],
      "offer": "10% off",
      "ratingsReviews": [
        {
          "review": "Great quality, love the design!",
          "user": "64f0b25c32a1e94ac8123456",
          "rating": "5",
          "createdAt": "2024-09-28T10:30:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image3.jpg", "image4.jpg"],
      "offer": null,
      "ratingsReviews": [
        {
          "review": "Very spacious, perfect for work!",
          "user": "64f0b25c32a1e94ac8123457",
          "rating": "4",
          "createdAt": "2024-09-29T12:15:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image5.jpg", "image6.jpg"],
      "offer": "15% off",
      "ratingsReviews": [
        {
          "review": "Elegant and very functional.",
          "user": "64f0b25c32a1e94ac8123458",
          "rating": "5",
          "createdAt": "2024-09-29T08:45:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image7.jpg", "image8.jpg"],
      "offer": null,
      "ratingsReviews": [
        {
          "review": "Perfect for my short travels.",
          "user": "64f0b25c32a1e94ac8123459",
          "rating": "4",
          "createdAt": "2024-09-28T11:05:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image9.jpg", "image10.jpg"],
      "offer": "20% off",
      "ratingsReviews": [
        {
          "review": "Beautiful and chic.",
          "user": "64f0b25c32a1e94ac8123460",
          "rating": "5",
          "createdAt": "2024-09-27T09:30:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image11.jpg", "image12.jpg"],
      "offer": "5% off",
      "ratingsReviews": [
        {
          "review": "Love the eco-friendly aspect!",
          "user": "64f0b25c32a1e94ac8123461",
          "rating": "4",
          "createdAt": "2024-09-26T07:15:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image13.jpg", "image14.jpg"],
      "offer": "10% off",
      "ratingsReviews": [
        {
          "review": "Perfect for formal events.",
          "user": "64f0b25c32a1e94ac8123462",
          "rating": "5",
          "createdAt": "2024-09-25T11:30:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image15.jpg", "image16.jpg"],
      "offer": "15% off",
      "ratingsReviews": [
        {
          "review": "Functional and stylish.",
          "user": "64f0b25c32a1e94ac8123463",
          "rating": "4",
          "createdAt": "2024-09-24T10:10:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image17.jpg", "image18.jpg"],
      "offer": "20% off",
      "ratingsReviews": [
        {
          "review": "Eye-catching and unique!",
          "user": "64f0b25c32a1e94ac8123464",
          "rating": "5",
          "createdAt": "2024-09-23T09:45:00.000Z"
        }
      ],
      "status": "Available"
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
      "images": ["image19.jpg", "image20.jpg"],
      "offer": null,
      "ratingsReviews": [
        {
          "review": "Very fun and playful design.",
          "user": "64f0b25c32a1e94ac8123465",
          "rating": "4",
          "createdAt": "2024-09-22T12:00:00.000Z"
        }
      ],
      "status": "Available"
    }
  ]
  
  await Product.insertMany(products);
  // console.log('Products inserted successfully');
  mongoose.connection.close();  // Close the connection after insertion
  } catch (error) {
  console.log('Error inserting products:', error);
  }
  };
  
  // insertProducts();

  module.exports = Product;