const mongoose = require("mongoose")

const connectDB = async () => {

  try {
    const connectFunc = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`Connect to ${connectFunc.connection.host}`.yellow.underline.bold);
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }

}

  module.exports = connectDB;