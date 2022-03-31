const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,

    },
     token: {
         type: String,
       },
  
   
  },
);

module.exports = mongoose.model("Clint", UserSchema);
