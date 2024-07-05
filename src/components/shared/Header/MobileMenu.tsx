import { motion } from "framer-motion"
import React from "react"
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillMail,
	AiFillTwitterCircle,
} from "react-icons/ai"
import Container from "../Container"
import TextLink from "../Link/TextLink"

const MobileMenu = () => {
	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ type: "tween" }}
			className={`absolute top-16 left-0 w-full bg-secondary lg:hidden z-10 py-5`}
		>
			<Container className="px-4">
				<TextLink href="/" className="py-2">
					Home
				</TextLink>
				<TextLink href="/contact" className="py-2">
					Contact
				</TextLink>
				<TextLink href="/blog" className="py-2">
					Blog
				</TextLink>
				<TextLink href="/github" className="py-2">
					Git
				</TextLink>

				<div className="flex gap-3 py-2 pb-5 text-3xl">
					<a
						data-umami-event="Twitter Link Clicked"
						data-umami-event-location="Mobile Navbar"
						href="https://twitter.com/shahriyardx/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillTwitterCircle />
					</a>

					<a
						data-umami-event="GitHub Link Clicked"
						data-umami-event-location="Mobile Navbar"
						href="https://github.com/shahriyardx/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillGithub />
					</a>

					<a
						data-umami-event="Linkedin Link Clicked"
						data-umami-event-location="Mobile Navbar"
						href="https://www.linkedin.com/in/shahriyardx/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin className="rounded-full" />
					</a>

					<a
						data-umami-event="Email Link Clicked"
						data-umami-event-location="Mobile Navbar"
						href="mailto:mdshahriyaralam9@gmail.com"
					>
						<AiFillMail className="rounded-full" />
					</a>
				</div>
			</Container>
		</motion.div>
	)
}

export default MobileMenu
