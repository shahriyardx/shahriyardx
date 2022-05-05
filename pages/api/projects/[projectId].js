require('@/utils/mongoose')
import Project from '@/utils/schemas/Project'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({req})
  if (!session && !session?.admin) {
    return res.status(401).json({ error: 'Unauthorized'})
  }
  
  const projectId = req.query.projectId

  switch (req.method) {
    case "PUT":
      const body = JSON.parse(req.body)
      const update_data = await Project.updateOne({ _id: projectId }, {
        $set: body
      })
      res.json(update_data)
      break;
    case "DELETE":
      const delete_data = await Project.deleteOne({ _id: projectId })
      res.json(delete_data)
      break;
    default:
      res.status(405).json({ error: "Method not allowed"})
      break;
  }
}

