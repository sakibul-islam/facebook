const mongoose = require("mongoose");

const connection = {}

const dbConnect = async () => {
  if(connection.isConnected) return;
  try {
    const db = await mongoose.connect("mongodb+srv://sakib:sakib1231@cluster0.sqj22.mongodb.net/facebook?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState
  } catch(error) {
    console.log(error)
  }
}

module.exports = {dbConnect}