import Experiences from "@/components/Experience/Experiences"
import Banner from "@/components/home/Banner"
import CallToAction from "@/components/home/CallToAction/CallToAction"
import Projects from "@/components/home/Projects/Projects"
import Services from "@/components/home/Services/Services"
import Skills from "@/components/home/Skills/Skills"
import Main from "@/components/layouts/Main"

const Home = () => {
	return (
		<Main>
			<Banner />
			<Services />
			<Skills />
			<Projects />
			<Experiences />
			<CallToAction />
		</Main>
	)
}

export default Home
