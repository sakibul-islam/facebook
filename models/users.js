const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	displayName: {
    type: String,
    required: true
  },
	userName: {
    type: String,
    required: true
  },
	followers: Number,
	nickName: String,
	photoURL: String,
	coverURL: String,
	photos: [String],
	bio: String,
	born: Date,
});

module.exports = mongoose.model('User', userSchema)