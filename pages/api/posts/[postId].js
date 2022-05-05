require('@/utils/mongoose')
import Post from '@/utils/schemas/Post'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({req})
  if (!session && !session?.admin && req.method !== "GET") {
    return res.status(401).json({ error: 'Unauthorized'})
  }
  
  const postId = req.query.postId

  switch (req.method) {
    case "PUT":
      const body = JSON.parse(req.body)
      const update_data = await Post.updateOne({ _id: postId }, {
        $set: body
      })
      res.json(update_data)
      break;
    case "DELETE":
      const delete_data = await Post.deleteOne({ _id: postId })
      res.json(delete_data)
      break;
    default:
      res.status(405).json({ error: "Method not allowed"})
      break;
  }
}

