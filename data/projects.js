const projects = [
  {
    name: "Roktoo",
    slug: "roktoo",
    tags: ["NextJs", "ReactJs", "TailwindCss", "NodeJs"],
    description:
      "Roktoo is a blood donating platform where people can donate blood anf find blood",
    links: [
      { text: "Live Site", url: "https://roktoo.com/" },
      { text: "Repository", url: "https://github.com/shahriyardx/roktoo.com/" },
    ],
    features: [
      "Donators can register and start donating blood",
      "People can search for blood in their area and get a list of donators",
      "Post for blood requirement. And reach all the other donators instantly",
    ],
    technologies:
      "NextJs, ReactJs, TailwindCss, NextAuth, JWT Authentication, NodeJs, Docker",
  },
  {
    name: "Crisis Entertainment",
    slug: "crisis",
    tags: ["NextJs", "ReactJs", "TailwindCss", "NodeJs"],
    description:
      "Crisis Entertainment is a video game startup currently operating in Bangladesh, India and Australia. Presently it is trying to takeover gaming industry through disruptive innovation.",
    links: [
      { text: "Live Site", url: "https://crisisentertainment.com/" },
      { text: "Repository (Closed Source)", url: "#" },
    ],
    features: [
      "Responsive Design",
      "Static site generation",
      "Server side rendering",
      "SEO friendly",
      "Email sending using Gmail API",
    ],
    technologies: "NextJs, ReactJs, TailwindCss, NodeJs",
  },
  {
    name: "Compart",
    slug: "compart",
    tags: ["ReactJs", "TailwindCss", "NodeJs", "JavaScript"],
    description:
      "Pc parts manufaturer website. Where manufaturers can login and add products",
    links: [
      { text: "Live Site", url: "https://icompart.web.app/" },
      { text: "Frontend", url: "https://github.com/shahriyardx/compart" },
      {
        text: "Backend",
        url: "https://github.com/shahriyardx/compart-backend",
      },
    ],
    features: [
      "Responsive Design",
      "Multi role user dashboard",
      "Customer can add review",
      "Manufaturers can add or remove product, Manage orders, and Deliver them",
    ],
    technologies:
      "ReactJs, TailwindCss, NodeJs, JWT Authentication, Firebase, MongoDB, Stripe",
  },
];

export default projects;
