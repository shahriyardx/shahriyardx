import Main from "@/components/Layout/Main";
import SEO from "@/components/SEO";
import Services from "@/Sections/Services/Services";
import Banner from "@/Sections/Banner/Banner";
import Projects from "@/Sections/Projects/Projects";
import { API_BASE } from "@/utils/api";

export default function Home({ projects }) {
  return (
    <Main>
      <SEO />
      <Banner />
      <Services />
      <Projects projects={projects} />
    </Main>
  );
}

export const getStaticProps = async () => {
  const projects = await fetch(`${API_BASE}/projects`).then((data) =>
    data.json()
  );

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};
