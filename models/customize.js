const mongoose = require("mongoose");

const customizeSchema = new mongoose.Schema(
  {
    slideImage: {
      type: String,
    },
    firstShow: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const customizeModel = mongoose.model("customizes", customizeSchema);


const createDummyCustomizes = async () => {
  try {
    // Create dummy customize data
    const customizes = [
      {
        slideImage: "1.jpg",
        firstShow: 1,
      },
      {
        slideImage: "2.jpg",
        firstShow: 0,
      },
      {
        slideImage: "3.jpg",
        firstShow: 1,
      },
      {
        slideImage: "4.jpg",
        firstShow: 0,
      },
      {
        slideImage: "5.jpg",
        firstShow: 1,
      },
      {
        slideImage: "6.jpg",
        firstShow: 1,
      },
    ];

    // Insert the dummy customizes into the database
    await customizeModel.insertMany(customizes);
    console.log("Customizes inserted successfully");
  } catch (error) {
    console.log("Error inserting customizes:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after insertion
  }
};

// Call the function to create dummy customizes
// createDummyCustomizes();

module.exports = customizeModel;
