import mongoose from 'mongoose'
import Project from '../../../utils/schemas/Project'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        await mongoose.connect(process.env.MONGO_URL)
        const projects = await Project.find({})
        res.json(projects)
      } finally {
        await mongoose.disconnect()
      }

      break;
    case "POST":
      const session = await getSession({ req })

      if (!session && !session?.admin) {
        return res.status(401).json({ error: 'Unauthorized'})
      }
      
      try {
        await mongoose.connect(process.env.MONGO_URL)
        const body = JSON.parse(req.body)
        const data = await Project.create(body)
        res.json(data)
      } finally {
        await mongoose.disconnect()
      }

      break;
    default:
      res.status(405).json({ error: "Method not allowed"})
      break;
  }
}
