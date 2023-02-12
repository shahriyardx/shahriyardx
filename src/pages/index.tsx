import { type GetServerSideProps } from "next";
import Main from "components/layouts/Main";
import Banner from "components/home/Banner";
import Services from "components/home/Services/Services";
import Skills from "components/home/Skills/Skills";
import Projects from "components/home/Projects/Projects";
import CallToAction from "components/home/CallToAction/CallToAction";
import SEO from "components/shared/SEO";
import { type ProjectMeta, getAllProjects } from "utils/projects";

type Props = {
  projects: Array<ProjectMeta>;
};

const Home = ({ projects }: Props) => {
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

export const getStaticProps: GetServerSideProps = async () => {
  const projects = getAllProjects().map(project => project.meta)

  return {
    props: {
      projects: projects,
    },
  };
};
