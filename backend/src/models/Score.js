const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    score: Number,
    date: String,
});

module.exports = mongoose.model("Score", scoreSchema);