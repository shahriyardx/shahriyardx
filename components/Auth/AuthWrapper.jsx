import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


const AuthWrapper = ({ children }) => {
  const router = useRouter()
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push({
        pathname: '/login',
        query: {
          to: router.pathname
        }
      })
    }
  }, [status, router])
  

  if (status === 'loading') {
    return 'Loading...'
  }

  if (status === 'authenticated' && data.admin) {
    return children
  }

  if (status === 'authenticated' && !data.admin) {
    router.push('/')
  }

  return null
}

export default AuthWrapper