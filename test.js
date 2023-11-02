const base = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:3000`

const query = new URLSearchParams()
query.set("title", "A")
query.set("description", "blog.description")
query.set("read", "1")
query.set("time", "2")

const ogImage = new URL(`/api/blog/og?${query.toString()}`, base).toString()
console.log(ogImage)