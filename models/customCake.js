const mongoose = require("mongoose");

const customCakeSchema = mongoose.Schema(
  {
    name: {
        type: String,
      },
      email: {
        type: String,
        required: [true, "email is required"],
      },
      phone: {
        type: String,
      },
      userid: {
        type: String,
      },
      // orderItems: [],
      shippingAddress: {
        type: Object,
      },
      orderAmount: {
        type: String,
        //   required: true,
      },
      cakeDesign: {
        type: String,
        //   required: true,
      },
      cakeColor: {
        type: String,
        //   required: true,
      },
      cakeKg: {
        type: String,
        //   required: true,
      },
      cakeFlover: {
        type: String,
        //   required: true,
      },
      cakeMessage: {
        type: String,
        //   required: true,
      },
      selectedFile: {
        type: String,
        //   required: true,
      },
      cakeDescription: {
        type: String,
        //   required: true,
      },
      isDeliverd: {
        type: Boolean,
        default: false,
      },
      transectionId: {
        type: String,
        //   required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model( "customCake", customCakeSchema);
