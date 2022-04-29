import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


const AuthWrapper = ({ children }) => {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])
  

  if (status === 'loading') {
    return 'Loading...'
  }

  if (status === 'authenticated') {
    return children
  }

  return null
}

export default AuthWrapper