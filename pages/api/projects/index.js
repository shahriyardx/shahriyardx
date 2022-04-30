import mongoose from 'mongoose'
import Project from '../../../utils/schemas/Project'

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    const projects = await Project.find({})
    res.json(projects)
  } finally {
    await mongoose.disconnect()
  }

}
