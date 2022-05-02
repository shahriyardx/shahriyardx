import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import AuthWrapper from '../components/Auth/AuthWrapper'
import { wrapper } from '../redux/store'
import { useDispatch } from 'react-redux'
import { setProjects } from '../redux/projects'
import { setPosts } from '../redux/posts'
import { useEffect } from 'react'
import { API_BASE } from '../utils/api'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then(response => response.json())
      .then(data => {
        dispatch(setProjects(data))
      })

    fetch(`${API_BASE}/posts`)
      .then(response => response.json())
      .then(data => {
        dispatch(setPosts(data))
      })
  }, [dispatch])

  return (
    <SessionProvider session={pageProps.session}>
      <>
        <NextNProgress />
        {Component.requireAuth ? (
          <AuthWrapper>
            <Component {...pageProps} />
          </AuthWrapper>
          ) : (
            <Component {...pageProps} />
          )
        }
      </>
    </SessionProvider>
  )
}

export default wrapper.withRedux(MyApp)
