import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`Revalidating ${req.query.path}`);

  await res.revalidate(req.query.path as string);
  return res.json({ success: true });
}
