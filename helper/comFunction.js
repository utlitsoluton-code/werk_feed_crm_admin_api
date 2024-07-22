require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../module/common/users/model/userModel");

const jwtToken = async function (body) {
  const token = jwt.sign(body, process.env.jwtSecretKey, { expiresIn: "1y" });
  return token;
};

const bcryptfun = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

var randomFixedInteger = async function (length) {

  const randomNumber = Math.floor(
    Math.pow(10, length - 1) +
    Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );

  // check for unique client code
  const check = await userModel.findOne({ client_code: `CS${randomNumber}`})

  if(!check) return randomNumber
  await randomFixedInteger(length) 
};

const responseMessage = (response, statusCode, statusType, message) => {
  return response.status(statusCode || 500).json(
    {
      meta: {
        message: message || "Something went wrong!",
        status: statusType
      }
    }
  )
}

module.exports = {
  jwtToken,
  bcryptfun,
  randomFixedInteger,
  responseMessage
};
