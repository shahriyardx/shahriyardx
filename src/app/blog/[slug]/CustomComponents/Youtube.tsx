import { cn } from "@/tools/tw"
import YouTube from "react-youtube"

const CustomYoutube = ({
  videoId,
  className,
  iframeClassName,
}: {
  videoId: string
  className: string
  iframeClassName: string
}) => {
  return (
    <YouTube
      videoId={videoId}
      className={cn(`my-5 max-w-full`, className)}
      iframeClassName={cn(`max-w-full`, iframeClassName)}
    />
  )
}

export default CustomYoutube
