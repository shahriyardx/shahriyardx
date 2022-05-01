import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  meta: String,
  image: String,
  content: String,
  tags: [{value: String, label: String}],
})

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema)