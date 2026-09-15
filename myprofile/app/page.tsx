const skills = [
  "Playwright",
  "Robot Framework",
  "Selenium",
  "Cypress",
  "Appium",
  "TypeScript",
  "JavaScript",
  "Java",
  "Postman",
  "SQL",
  "Jenkins",
  "Git",
  "CI/CD",
];

const projects = [
  {
    title: "Playwright Automation Framework",
    description:
      "End-to-end automation framework built with Playwright, TypeScript and Cucumber with reusable components and reporting.",
    tech: ["Playwright", "TypeScript", "Cucumber"],
    github: "https://github.com/yourusername/playwright-framework",
  },
  {
    title: "Robot Framework Testing",
    description:
      "Web automation framework using Robot Framework and Selenium with reusable keywords and CI integration.",
    tech: ["Robot Framework", "Selenium", "Jenkins"],
    github: "https://github.com/yourusername/robot-framework",
  },
  {
    title: "API Automation Testing",
    description:
      "Automated API regression tests covering authentication, validation, negative scenarios and response schema.",
    tech: ["Postman", "REST API", "JavaScript"],
    github: "https://github.com/yourusername/api-testing",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-tight">
            Panida<span className="text-purple-400">.</span>
          </div>

          <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            QA Automation Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m Panida.
            <br />
            I build quality into
            <span className="text-purple-400"> software.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            QA Automation Engineer specializing in test automation, web and API
            testing, CI/CD and scalable automation frameworks.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-purple-500 px-6 py-3 font-medium text-white transition hover:bg-purple-400"
            >
              View Projects
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold">About Me</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-8 text-zinc-400">
              I&apos;m a QA Automation Engineer with experience designing,
              implementing and maintaining automated testing solutions for
              complex applications.
            </p>

            <p className="text-lg leading-8 text-zinc-400">
              I enjoy solving testing challenges, improving automation
              architecture and helping teams release reliable software faster.
              My long-term focus is Software Development Engineer in Test
              (SDET) and quality engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-zinc-900 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Tech Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold">Skills</h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Career
          </p>

          <h2 className="mt-4 text-4xl font-bold">Experience</h2>

          <div className="mt-12 space-y-10">
            <div className="grid gap-4 border-l-2 border-purple-500 pl-6 md:grid-cols-[200px_1fr]">
              <div className="text-sm text-zinc-500">
                2024 — Present
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  QA Automation Engineer
                </h3>

                <p className="mt-1 text-purple-400">
                  Chubb Samaggi Insurance
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  Develop and maintain automated test suites, execute SIT and
                  UAT testing, investigate defects and collaborate with
                  developers, business analysts and product teams.
                </p>
              </div>
            </div>

            <div className="grid gap-4 border-l-2 border-zinc-700 pl-6 md:grid-cols-[200px_1fr]">
              <div className="text-sm text-zinc-500">
                2022 — 2024
              </div>

              <div>
                <h3 className="text-xl font-semibold">QA Engineer</h3>

                <p className="mt-1 text-purple-400">TMBThanachart Bank</p>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  Performed functional, regression and automation testing for
                  enterprise banking applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-900 bg-zinc-900/30"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold">Projects</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-purple-500/50"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="mt-8 inline-block text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let&apos;s work together.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            I&apos;m open to opportunities in QA Automation, SDET and Software
            Quality Engineering.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-10 inline-block rounded-xl bg-purple-500 px-8 py-4 font-medium transition hover:bg-purple-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Panida. Built with Next.js.
      </footer>
    </main>
  );
}