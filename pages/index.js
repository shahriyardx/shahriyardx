import Main from "@/components/Layout/Main";
import SEO from "@/components/SEO";
import Services from "@/Sections/Services/Services";
import Banner from "@/Sections/Banner/Banner";
import Projects from "@/Sections/Projects/Projects";
import projects from "../data/projects";
import Skills from "@/Sections/Skills/Skills";
import CallToAction from "@/Sections/CallToAction/CallToAction";

const Home = () => {
  return (
    <Main>
      <SEO />
      <Banner />
      <Services />
      <Skills />
      <Projects projects={projects} />
      <CallToAction />
    </Main>
  );
};

export default Home;
