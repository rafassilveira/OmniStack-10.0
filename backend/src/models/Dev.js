const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    // index é obrigatorio para trabalhar com geolocalização, basicamete é x e y
    index:'2dsphere'
  }
});

module.exports = mongoose.model("Dev", DevSchema);
