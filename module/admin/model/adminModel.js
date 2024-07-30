const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminModel = mongoose.model(
  "admins",
  new Schema(
    {
      roleId: { type: mongoose.Types.ObjectId },
      roleName: String,
      name: {
        type:String,
        default:'Super Admin'
      },
      email: String,
      alternateMobile: String,
      password: String,
      adminType: {
        type: String,
        enum: ["SUPERADMIN", "SUBADMIN"],
        default: "SUBADMIN",
      },
      mobile: String,
      isLogin: { type: Boolean, default: false },
      profilePic: {
        type:String,
        default:'https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png'
      },
      status: {
        type: String,
        enum: ["ACTIVE", "DEACTIVE"],
        default: "ACTIVE",
      },
      address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: Number,
      },
      tax_number:{
        type:String
      },
      buss_reg_num:{
        type:String
      },
      logo:{
        type:String,
        default:'https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png'
      }
    },
    { timestamps: true }
  )
);

module.exports = { adminModel };
