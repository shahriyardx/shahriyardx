import mongoose from 'mongoose'
import slugify from 'slugify'

const PostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  meta: String,
  image: String,
  content: String,
  views: {
    type: Number,
    default: 0
  },
  tags: [{value: String, label: String}],
}, {timestamps: true})

PostSchema.pre("save", function (next) {
    this.slug = slugify(this.title)
    next()
})

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema)