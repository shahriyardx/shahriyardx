import { type GetServerSideProps, type NextPage } from "next";
import Main from "components/layouts/Main";
import Banner from "components/home/Banner";
import Services from "components/home/Services/Services";
import Skills from "components/home/Skills/Skills";
import Projects from "components/home/Projects/Projects";
import CallToAction from "components/home/CallToAction/CallToAction";
import SEO from "components/shared/SEO";
import { api } from "../http";
import { type ICollectionResponse, type IProject } from "types";
import axios, { AxiosResponse } from "axios";
import { env as serverEnv } from "env/server.mjs";
import { env as clientEnv } from "env/client.mjs";

type Props = {
  projects: Array<IProject>;
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
export const getServerSideProps: GetServerSideProps = async () => {
  // const url = `${clientEnv.NEXT_PUBLIC_STRAPI_BASE}/api/projects`
  const url = `http://localhost:1337/api/projects`
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${serverEnv.STRAPI_TOKEN}`
    }
  })
  // const response : AxiosResponse<ICollectionResponse<Array<IProject>>> = await api.get(
  //   "/api/projects?populate=*"
  // );
  console.log(response.data)
  return {
    props: {
      projects: [],
    },
  };
};
