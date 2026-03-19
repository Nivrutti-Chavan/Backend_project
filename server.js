const { connect } = require("mongoose");
require("dotenv").config();
const app = require("./src/App");
const ConnectDb = require("./src/DB/db");

ConnectDb();

app.listen(3000, () => {
    console.log("server running on port 3000")
})