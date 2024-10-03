const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema(
  {
    allProduct: [
      {
        id: { type: ObjectId, ref: "products" },
        quantitiy: Number,
      },
    ],
    user: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Not processed",
      enum: [
        "Not processed",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orders", orderSchema);

const createDummyOrders = async () => {
  try {
    // Create dummy order data
    const orders = [
      {
        allProduct: [
          { id: mongoose.Types.ObjectId("64841c45f1c8e4a10122b236"), quantitiy: 2 },
          { id: mongoose.Types.ObjectId("64841c45f1c8e4a10122b237"), quantitiy: 1 },
        ],
        user: mongoose.Types.ObjectId("64841c45f1c8e4a10122b238"), // Example user ID
        amount: 200.0,
        transactionId: "txn_001",
        address: "123 Main St, Springfield, IL",
        phone: 1234567890,
        status: "Not processed",
      },
      {
        allProduct: [
          { id: mongoose.Types.ObjectId("64841c45f1c8e4a10122b239"), quantitiy: 1 },
          { id: mongoose.Types.ObjectId("64841c45f1c8e4a10122b240"), quantitiy: 3 },
        ],
        user: mongoose.Types.ObjectId("64841c45f1c8e4a10122b241"), // Example user ID
        amount: 350.0,
        transactionId: "txn_002",
        address: "456 Elm St, Springfield, IL",
        phone: 9876543210,
        status: "Processing",
      },
      {
        allProduct: [
          { id: mongoose.Types.ObjectId("64841c45f1c8e4a10122b242"), quantitiy: 1 },
        ],
        user: mongoose.Types.ObjectId("64841c45f1c8e4a10122b243"), // Example user ID
        amount: 150.0,
        transactionId: "txn_003",
        address: "789 Oak St, Springfield, IL",
        phone: 5555555555,
        status: "Shipped",
      },
    ];

    // Insert the dummy orders into the database
    await orderModel.insertMany(orders);
    console.log("Orders inserted successfully");
  } catch (error) {
    console.log("Error inserting orders:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after insertion
  }
};

// Call the function to create dummy orders

module.exports = orderModel;
// createDummyOrders();
