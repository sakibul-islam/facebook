const mongoose = require("mongoose");
require('dotenv').config();

const connection = {}

const dbConnect = async () => {
  console.log({string: process.env.MONGO_CONNECTION_STRING})
  if(connection.isConnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState
  } catch(error) {
    console.log(error)
  }
}

module.exports = {dbConnect}