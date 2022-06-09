import mongoose from "mongoose";
import slugify from "slugify";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    meta: String,
    image: String,
    content: String,
    tags: [{ value: String, label: String }],
  },
  { timestamps: true }
);

PostSchema.pre("save", function (next) {
  this.slug = slugify(this.title);
  next();
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
