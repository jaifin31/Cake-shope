const mongoose = require("mongoose");

const customCakeSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "order name required"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
      },
      phone: {
        type: String,
        required: [true, "Phone Number is required"],
      },
      userid: {
        type: String,
      },
      orderItems: [],
      shippingAddress: {
        type: Object,
      },
      orderAmount: {
        type: String,
        //   required: true,
      },
      cakedesign: {
        type: String,
        //   required: true,
      },
      color: {
        type: String,
        //   required: true,
      },
      weight: {
        type: String,
        //   required: true,
      },
      Flover: {
        type: String,
        //   required: true,
      },
      message: {
        type: String,
        //   required: true,
      },
      image: {
        type: String,
        //   required: true,
      },
      discription: {
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
