const mongoose = require("mongoose");
require("dotenv").config();

const connect_DB = async () => await mongoose.connect(process.env.DB_URL);

module.exports = connect_DB;
