import Experience from "./Experience"

const Experiences = () => {
  return (
    <div className="px-5 bg-secondary">
      <div className="max-w-6xl py-10 mx-auto md:py-20">
        <div className="text-center">
          <span className="text-lg uppercase text-zinc-600">Previous Jobs</span>
          <h1 className="text-4xl font-bold text-zinc-300">Experience</h1>
        </div>

        <div className="mt-10">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <Experience
              company="Programming Hero"
              from="November 2023"
              to="Present"
              current
              position="Web Instructor"
              responsibilities={[
                "Provide feedback and guidance to students on their coursework",
                "Answer questions and provide support through the course facebook group",
                "Assist with the development of new courses and course materials",
                "Collaborate with other instructors to ensure consistency in course content and delivery",
                "Stay up-to-date with industry trends and technologies related to web development and the MERN stack",
              ]}
            />

            <Experience
              company="Programming Hero"
              from="August 2023"
              to="October 2023"
              position="Web Instructor (Intern)"
              responsibilities={[
                "Provide feedback and guidance to students on their coursework",
                "Answer questions and provide support through the course facebook group",
                "Assist with the development of new courses and course materials",
                "Collaborate with other instructors to ensure consistency in course content and delivery",
                "Stay up-to-date with industry trends and technologies related to web development and the MERN stack",
              ]}
            />

            <Experience
              company="Onito Technologies Pvt. Ltd"
              from="April 2022"
              to="June 2022"
              position="React Developer"
              responsibilities={[
                "Adding new UI elements and React components, and integrating them with the application",
                "Understand client's requirements and improving user experience",
                "Working with good knowledge of  JavaScript",
                "Work with ReactJS (useState, useEffect, lifecycle, class component, functional component , hooks)",
                "Handling the backend API data in ReactJS",
                "Maintaining code re-usability, optimization, and high quality",
                "Creating and maintaining technical documantation",
              ]}
            />

            <Experience
              company="Crisis Entertainment"
              from="April 2022"
              to="June 2022"
              position="Web Developer"
              responsibilities={[
                "Developing and maintaining the official website",
                "Writing clean and maintainable code",
                "Using React and Next.js to make both Desktop and Mobile friendly user experience.",
              ]}
            />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Experiences
