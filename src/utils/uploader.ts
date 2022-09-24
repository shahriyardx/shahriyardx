import { env } from "env/client.mjs"

type UploadProps = {
  path: string
  file: File
  onStart: () => void
  onFinish: () => void
}

export const uploadImage = async ({
  path,
  file,
  onStart,
  onFinish,
}: UploadProps): Promise<string | null> => {
  if (!file) return null
  onStart()
  return new Promise((resolve, reject) => {
    const imageData = new FormData()

    imageData.append("file", file)
    imageData.append("upload_preset", path)

    try {
      fetch(env.NEXT_PUBLIC_CLOUDINARY_URL, {
        method: "POST",
        body: imageData,
      })
        .then((response) => response.json())
        .then((data) => {
          onFinish()
          resolve(data.secure_url)
        })
    } catch (error) {
      onFinish()
      resolve(null)
    }
  })
}
