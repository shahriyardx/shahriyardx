import mongoose from "mongoose";
import slugify from "slugify";

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    description: String,
    url: String,
    image: String,
    tags: [{ value: String, label: String }],
  },
  { timestamps: true }
);

ProjectSchema.pre("save", function (next) {
  this.slug = slugify(this.title);
  next();
});

module.exports =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
