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
      "Crisis Entertainment is a video game startup currently operating in Bangladesh, India and Australia.",
    links: [
      { text: "Live Site", url: "https://crisisentertainment.com/" },
      { text: "Repository (Closed Source)", url: "" },
    ],
    features: [
      "Responsive Design using ReactJs and TailwindCSS",
      "Static site generation for blog/articles",
      "SEO friendly using next/head package",
      "Email sending using Gmail API",
    ],
    technologies: "NextJs, ReactJs, TailwindCss, NodeJs, Nodemailer",
  },
  {
    name: "Compart",
    slug: "compart",
    tags: ["ReactJs", "TailwindCss", "NodeJs", "JavaScript", "ExpressJs"],
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
  {
    name: "Wildie",
    slug: "wildie",
    tags: ["ReactJs", "TailwindCss", "NodeJs"],
    description: "Wild life photographer portfolio and service website",
    links: [
      { text: "Live Site", url: "https://wildie-shahriyardx.web.app/" },
      { text: "Repository", url: "https://github.com/shahriyardx/wildie" },
    ],
    features: [
      "React Js for UI Management",
      "React Router Dom for routes",
      "Twilwindcss for UI Design",
      "Firebase for authentication",
      "Firebase hosting to deploy site to public",
    ],
    technologies: "ReactJs, TailwindCss, NodeJs, JWT Authentication, Firebase",
  },
  {
    name: "Makeown",
    slug: "makeown",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    description:
      "A discord bot dashboard to manage the bot from a web interface",
    links: [
      { text: "Live Site", url: "https://makeown.cc" },
      { text: "Repository (Closed Source)", url: "#" },
    ],
    features: [
      "Login with discord",
      "Responsive Layout",
      "Backend API with python",
      "Postgresql Database using asyncpg (python)",
      "Hosted on a Linux VPS",
      "Inter-process communication using websockets",
    ],
    technologies: "Python, Websockets, Postgresql, Quart (Framework)",
  },
  {
    name: "Laptop Carnival",
    slug: "laptopcarnival",
    tags: ["ReactJs", "TailwindCss", "NodeJs", "ExpressJs"],
    description:
      "Best inventory for selling laptops. Worldwide shipping, fastest delivery",
    links: [
      { text: "Live Site", url: "https://laptop-carnival.web.app/" },
      {
        text: "Frontend",
        url: "https://github.com/shahriyardx/laptop-carnival",
      },
      {
        text: "Backend",
        url: "https://github.com/shahriyardx/laptop-carnival-backend",
      },
    ],
    features: [
      "ReactJs library for UI",
      "Tailwindcss for designing the frontend",
      "Powered by nodejs backend api hosted on heroku",
      "Login with email/password and google",
      "JWT Token Authentication",
      "Inter-process communication using websockets",
    ],
    technologies: "ReactJs, TailwindCSS, Firebase, MongoDB, jsobwebtoken",
  },
];

export default projects;
