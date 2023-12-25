const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected Successfully");
  } catch (error) {
    console.log("!Error :");
  }
};

module.exports = dbConnect;
