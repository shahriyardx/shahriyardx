import Main from "@/components/layouts/Main"
import Banner from "@/components/home/Banner"
import Services from "@/components/home/Services/Services"
import Skills from "@/components/home/Skills/Skills"
import Projects from "@/components/home/Projects/Projects"
import CallToAction from "@/components/home/CallToAction/CallToAction"

const Home = () => {
  return (
    <Main>
      <Banner />
      <Services />
      <Skills />
      <Projects />
      <CallToAction />
    </Main>
  )
}

export default Home
