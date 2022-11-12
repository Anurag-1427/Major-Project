const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });

    console.log(`Mongo DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

// //Connection file to mongodb

// const mongoose = require("mongoose");
// // import colors from "colors";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
//     // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     // console.error(`Error: ${error.message}`.red.bold);
//     console.error(`Error: ${error.message}`);
//     process.exit();
//   }
// };

// module.exports = connectDB;
