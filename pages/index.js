import Main from "@/components/Layout/Main";
import SEO from "@/components/SEO";
import Services from "@/sections/Services/Services";
import Banner from "@/sections/Banner/Banner";
import Projects from "@/sections/Projects/Projects";
import projects from "@/data/projects";
import Skills from "@/sections/Skills/Skills";
import CallToAction from "@/sections/CallToAction/CallToAction";

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
