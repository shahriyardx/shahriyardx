import mongoose from 'mongoose'
import Project from '../../../utils/schemas/Project'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({req})

  if (req.method !== "POST") {
    return res.status(400).json({ error: 'Invalid Request'})
  }

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized'})
  }

  await mongoose.connect(process.env.MONGO_URL)
  
  const {_id, ...body} = JSON.parse(req.body)
  
  const data = await Project.updateOne({ _id }, body)

  res.json(data)
}

