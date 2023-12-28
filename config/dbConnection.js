const mongoose = require('mongoose');

const url = 'mongodb+srv://annedeekshith:Anne2002@cluster0.epf7dln.mongodb.net/TIFDB?retryWrites=true&w=majority';


const connectDB = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log(
      "data base connected",
      connect.connection.name
    )
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;