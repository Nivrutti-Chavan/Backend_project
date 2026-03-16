const mongoose = require("mongoose")


async function ConnectDb() {
    await mongoose.connect(process.env.mongoDb_url);
    console.log("connected to db")
}

module.exports = ConnectDb;