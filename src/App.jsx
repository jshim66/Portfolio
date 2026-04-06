const featuredProjects = [
  {
    title: "Plantify",
    subtitle: "Full-stack plant identification app",
    stack: ["React", "TypeScript", "Express", "Node.js", "Plant.ID API"],
    whyBuilt:
      "I built Plantify because I wanted a project that felt more interactive than a standard CRUD app while giving me real experience with file uploads and third-party API integration. Plant identification felt practical, visual, and useful right away, which made it a strong project for building both technical depth and product thinking.",
    owned: [
      "Built the full upload-to-results flow across the React frontend and Express backend",
      "Handled base64 image processing and third-party API requests on the server",
      "Worked through CORS, file upload, and TypeScript environment issues during development",
      "Designed the result experience so plant details felt clear and easy to understand"
    ],
    learned:
      "The most valuable part of the project was learning how much polish lives between the core feature and the actual user experience. Getting the technical flow working was only the first step. Making uploads reliable, handling API responses cleanly, and presenting results in a way that felt useful taught me a lot about end-to-end product implementation.",
    nextSteps: [
      "Improve upload guidance, loading states, and error handling so the flow feels more reliable for first-time users",
      "Add saved identification history so users can revisit previous plant results instead of treating each upload as a one-off session",
      "Expand result details with clearer confidence indicators and more useful follow-up plant care information"
    ],
    links: {
      github: "https://github.com/jshim66",
      live: "#"
    }
  },
  {
    title: "Spaghetti Looperz",
    subtitle: "Western-themed game jam project built under a four-day deadline",
    stack: ["Godot", "C#", "Git", "Game Systems", "Team Collaboration"],
    whyBuilt:
      "I built Spaghetti Looperz as part of a game jam because I wanted experience shipping something creative with a team under real time pressure. It was a chance to practice fast decision-making, collaborative development, and delivering a playable experience instead of endlessly refining ideas.",
    owned: [
      "Designed and implemented modular gameplay systems during a four-day development cycle",
      "Built gameplay around quick combat interactions, progression, and arcade-style pacing",
      "Collaborated with a team using Git while managing rapid iteration and shared code changes",
      "Helped ship a project that placed in the top 1,000 out of 9,700+ submissions"
    ],
    learned:
      "This project reinforced how important scope, communication, and clean implementation are when time is limited. It taught me how to balance ambition with execution and how to make practical engineering choices that keep a team moving.",
    links: {
      github: "https://github.com/jshim66",
      live: "https://azhangtaco.itch.io/spaghetti-loopers"
    }
  }
];

const skillGroups = [
  {
    title: "Languages",
    values: ["C#", "Python", "SQL", "JavaScript", "TypeScript", "GDScript"]
  },
  {
    title: "Testing",
    values: [
      "Test Automation",
      "Regression Testing",
      "API Testing",
      "System Validation",
      "End-to-End Testing",
      "Release Validation"
    ]
  },
  {
    title: "Tools",
    values: ["Azure DevOps", "Git", "Postman", "Playwright", "NUnit", "FlaUI"]
  },
  {
    title: "Frameworks",
    values: ["React", "Node.js", "Express", "Godot 4.4"]
  },
  {
    title: "Concepts",
    values: [
      "CI/CD",
      "Cross-Functional Collaboration",
      "Data Validation",
      "Agile Development",
      "Reliability and Quality Engineering"
    ]
  }
];

const strengths = [
  {
    title: "Automation depth",
    text: "Experienced building automation that reduces manual effort and improves release confidence across complex workflows."
  },
  {
    title: "Systems mindset",
    text: "Comfortable validating connected systems, data movement, and end-to-end behavior instead of only isolated UI checks."
  },
  {
    title: "Growth into SWE",
    text: "Actively building full-stack and game projects that show coding range, product ownership, and architectural thinking."
  }
];

const experience = [
  {
    company: "Venus AI",
    role: "Software Quality Engineer",
    period: "Feb 2023 - Mar 2026",
    note: "Promoted from Jr. Software Quality Engineer in Feb 2024",
    bullets: [
      "Designed and built C# automation frameworks targeting complex, multi-hour test scenarios for ARTAS, a robotic hair restoration system, reducing overall test cycle time and enabling engineers to iterate faster across monthly release cycles.",
      "Developed SQL scripts to verify correct data transfer between local and server environments, cross-referencing treatment report outputs against source records to ensure data correctness and integrity at scale.",
      "Integrated automation test suites into CI/CD pipelines via Azure DevOps, establishing consistent regression coverage and faster feedback loops that supported a high-cadence monthly release schedule.",
      "Collaborated with cross-functional R&D teams spanning hardware, enterprise, and software engineering to implement and validate cloud-based system registration and device connectivity across complex end-to-end workflows.",
      "Owned end-to-end release validation across 5+ software releases in a regulated medical device environment, coordinating between engineering and clinical stakeholders to align on quality standards and release readiness.",
      "Participated in live clinical procedure sessions as the on-site technical operator, observing real-world system behavior and translating findings into actionable bug reports and improvements that fed directly back into the development cycle."
    ]
  }
];

const contactLinks = [
  {
    label: "Email",
    value: "jshim66@gmail.com",
    href: "mailto:jshim66@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/justin-shim-89132b1a3",
    href: "https://www.linkedin.com/in/justin-shim-89132b1a3/"
  },
  {
    label: "GitHub",
    value: "github.com/jshim66",
    href: "https://github.com/jshim66"
  },
  {
    label: "Location",
    value: "San Francisco Bay Area"
  }
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function ActionLink({ href, children, variant = "primary" }) {
  const className = variant === "secondary" ? "button secondary" : "button";

  if (!href || href === "#") {
    return (
      <span className={`${className} disabled`} aria-disabled="true">
        {children}
      </span>
    );
  }

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf");

  return (
    <a
      className={className}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />

      <header className="hero" id="top">
        <nav className="site-nav">
          <div>
            <p className="site-name">Justin Shim</p>
            <p className="site-role">
              Software Quality Engineer | SDET | Software Engineering Candidate
            </p>
          </div>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-chip">
              Open to SDET, software quality, and software engineering roles
            </p>
            <h1>
              Quality engineer with 3+ years in automation, systems validation,
              and release readiness.
            </h1>
            <p className="hero-text">
              I have 3+ years of experience building automation frameworks,
              validating complex end-to-end workflows, and supporting release
              readiness in a regulated medical device environment. I am targeting
              SDET, software quality, and software engineering roles where I can
              contribute both engineering rigor and hands-on coding ability.
            </p>

            <div className="button-row">
              <ActionLink href="#projects">View Projects</ActionLink>
              <ActionLink href="#contact" variant="secondary">
                Contact Me
              </ActionLink>
              <ActionLink
                href="/Justin_Shim_SWE_Resume.pdf"
                variant="secondary"
              >
                Resume
              </ActionLink>
            </div>

            <div className="hero-metrics">
              <div>
                <span>3+ years</span>
                <p>Quality engineering and automation experience</p>
              </div>
              <div>
                <span>5+ releases</span>
                <p>End-to-end release validation in a regulated environment</p>
              </div>
              <div>
                <span>Cross-functional</span>
                <p>Collaboration across software, hardware, enterprise, and clinical teams</p>
              </div>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="eyebrow">Snapshot</p>
            <div className="panel-stack">
              <div>
                <h3>Target roles</h3>
                <p>
                  SDET, software quality engineer, and transition-friendly
                  software engineering roles.
                </p>
              </div>
              <div>
                <h3>Core strengths</h3>
                <p>
                  Automation frameworks, systems validation, regression coverage,
                  and release readiness across connected workflows.
                </p>
              </div>
              <div>
                <h3>Technologies</h3>
                <p>
                  C#, SQL, Azure DevOps, Playwright, React, Node.js, and Godot.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <SectionHeading
            eyebrow="Why me"
            title="A strong fit for high-quality engineering work"
            description="My background combines hands-on automation, release validation, data verification, and cross-functional collaboration with active software building outside of work."
          />

          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow="Featured projects"
            title="Projects that reflect both engineering and product thinking"
            description="These projects highlight hands-on software development, fast iteration, and product-minded implementation."
          />

          <div className="project-list">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <div>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>

                <div className="project-sections">
                  <div className="project-section">
                    <p className="project-section-label">Why I built it</p>
                    <p className="project-description">{project.whyBuilt}</p>
                  </div>

                  <div className="project-section">
                    <p className="project-section-label">What I owned</p>
                    <div className="highlight-list compact">
                      {project.owned.map((highlight) => (
                        <div className="highlight-row" key={highlight}>
                          <span />
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-section">
                    <p className="project-section-label">What I learned</p>
                    <p className="project-description">{project.learned}</p>
                  </div>

                  {project.nextSteps ? (
                    <div className="project-section">
                      <p className="project-section-label">Next steps</p>
                      <div className="highlight-list compact">
                        {project.nextSteps.map((step) => (
                          <div className="highlight-row" key={step}>
                            <span />
                            <p>{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="button-row">
                  <ActionLink href={project.links.github} variant="secondary">
                    GitHub
                  </ActionLink>
                  <ActionLink href={project.links.live}>Live Demo</ActionLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading
            eyebrow="Work experience"
            title="Professional experience in quality engineering and systems validation"
            description="Hands-on experience building automation, validating regulated workflows, and supporting cross-functional release readiness in a medical device environment."
          />

          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-card" key={job.company}>
                <div className="timeline-head">
                  <div>
                    <p className="timeline-company">{job.company}</p>
                    <h3>{job.role}</h3>
                    <p className="timeline-note">{job.note}</p>
                  </div>
                  <p className="timeline-period">{job.period}</p>
                </div>

                <div className="highlight-list">
                  {job.bullets.map((bullet) => (
                    <div className="highlight-row" key={bullet}>
                      <span />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technologies"
            description="A mix of automation, software development, and testing technologies that support the roles I am targeting."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.values.map((value) => (
                    <Tag key={value}>{value}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="I am currently seeking new opportunities across software quality, SDET, and software engineering roles."
          />

          <div className="contact-panel">
            {contactLinks.map((item) => (
              <article className="contact-card" key={item.label}>
                <p className="contact-label">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-text">{item.value}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
