const mongoose = require('mongoose');

const ForumPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    comments: { type: Number, required: false, default: 0 },
    author: { type: String, required: true }
}, { timestamps: true });

const ForumPost = module.exports = mongoose.model('ForumPosts', ForumPostSchema);