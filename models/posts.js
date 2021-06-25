const mongoose = require('mongoose');

const reactType = {
  type: Number,
  default: 0
}

const postSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
	time: {
    type: Date,
    required: true,
    default: Date.now
  },
  body: {
    caption: String,
    photoURL: String, 
    videoURL: String
  },
	reactions: {
    like: reactType,
    haha: reactType,
    love: reactType,
    wow: reactType,
    care: reactType,
    sad: reactType,
    angry: reactType,
  },
  comments: [{
    userName: String,
    body: String,
    time: Date
  }]
})

module.exports = mongoose.model('Post', postSchema)