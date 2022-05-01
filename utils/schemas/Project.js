import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  image: String,
  tags: [{value: String, label: String}],
})

module.exports = mongoose.models.Project || mongoose.model("Project", ProjectSchema)