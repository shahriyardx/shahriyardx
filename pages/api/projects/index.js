require('@/utils/mongoose')
import Project from '@/utils/schemas/Project'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const projects = await Project.find({}).sort({ createdAt: -1 })
      res.json(projects)
      break;
    case "POST":
      const session = await getSession({ req })

      if (!session && !session?.admin) {
        return res.status(401).json({ error: 'Unauthorized'})
      }
      
      const body = JSON.parse(req.body)
      const data = await Project.create(body)
      res.json(data)
      break;
    default:
      res.status(405).json({ error: "Method not allowed"})
      break;
  }
}
