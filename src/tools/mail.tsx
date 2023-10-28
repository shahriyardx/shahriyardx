import PH from "../../email/emails/ph"
import { renderAsync } from "@react-email/render"

export const getHtml = async (content: string) => {
  return await renderAsync(<PH content={content} />)
}
