import Main from "../components/Layout/Main";
import About from "../Sections/About/About";
import Banner from "../Sections/Banner/Banner";
import Projects from "../Sections/Projects/Projects";

export default function Home() {
  return (
    <Main>
      <Banner />
      <About />
      <Projects />
    </Main>
  )
}
