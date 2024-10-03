const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    },
    password: {
      type: String,
      required: true,
    },
    userRole: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    userImage: {
      type: String,
      default: "user.png",
    },
    verified: {
      type: String,
      default: false,
    },
    secretKey: {
      type: String,
      default: null,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

const createDummyUsers = async () => {
  try {
    // Create dummy user data
    const users = [
      {
        name: "sharu",
        email: "sharu@example.com",
        password: "sharu@123", // Use a hashed password in a real application
        userRole: 1, // Assuming 1 is for admin
        phoneNumber: 1234567890,
        userImage: "sharu.png",
        verified: "true",
        secretKey: null,
        history: [],
      },
      {
        name: "sharu23",
        email: "sharu23@example.com",
        password: "sharu@456",
        userRole: 2, // Assuming 2 is for a regular user
        phoneNumber: 9876543210,
        userImage: "sharu12.png",
        verified: "true",
        secretKey: null,
        history: [],
      }
    ];

    // Insert the dummy users into the database
    await userModel.insertMany(users);
    console.log("Users inserted successfully");
  } catch (error) {
    console.log("Error inserting users:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after insertion
  }
};

// Call the function to create dummy users
// createDummyUsers();

module.exports = userModel;
