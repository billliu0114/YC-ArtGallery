const mongoose = require('mongoose');

const artItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    detail: { type: String, required: false },
});

module.exports = mongoose.model('ArtItem', artItemSchema);