const mongoose = require("mongoose");

const connection = {}

const dbConnect = async () => {
  if(connection.isConnected) return;
  const db = await mongoose.connect("mongodb://localhost/facebook", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState
}

module.exports = {dbConnect}