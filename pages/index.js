import Main from "../components/Layout/Main";
import About from "../Sections/About/About";
import Banner from "../Sections/Banner/Banner";
import Projects from "../Sections/Projects/Projects";
import { API_BASE } from "../utils/api";

export default function Home({ projects }) {
  return (
    <Main>
      <Banner />
      <About />
      <Projects projects={projects} />
    </Main>
  )
}

export const getStaticProps = async (ctx) => {
  const projects =  await fetch(`${API_BASE}/projects`).then(data => data.json())

  return {
    props: {
      projects,
    },
    revalidate: 60
  }
}