import { useState } from "react";
import emailjs from "@emailjs/browser";
import guku from "./guku.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qee3v1o",
        "template_c63x75i",
        e.target,
        "uPAIqz0sdXaQkcAia"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  const skills = [
    {
      icon: "bi-filetype-js",
      title: "React",
      description: "Building responsive and interactive user interfaces.",
    },
    {
      icon: "bi-code-slash",
      title: "Spring Boot",
      description: "Developing REST APIs and backend applications.",
    },
    {
      icon: "bi-database",
      title: "MySQL",
      description: "Designing databases and working with relational data.",
    },
    {
      icon: "bi-filetype-java",
      title: "Java",
      description: "Object-oriented programming and backend development.",
    },
    {
      icon: "bi-git",
      title: "Git & GitHub",
      description: "Version control and project collaboration.",
    },
    {
      icon: "bi-bootstrap",
      title: "Bootstrap",
      description: "Creating responsive layouts and modern UI components.",
    },
  ];

  const projects = [
    {
      title: "Bio Form Validator",
      description:
        "A full-stack application for collecting and validating user biodata with image and signature upload.",
      technologies: ["React", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Earthmovers application",
      description:
        "A web application for managing users, projects and administrative operations.",
      technologies: ["React", "Spring Boot", "MySQL"],
      github: "#",
      demo: "https://andavar-earth-movers.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive developer portfolio built with React to showcase skills, projects and education.",
      technologies: ["React", "Bootstrap"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">

          <button
            className="navbar-brand logo-btn"
            onClick={() => scrollToSection("home")}
          >
            Gukan<span>.</span>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-lg-7">

              <p className="hero-small-text mb-2">
                Hello, I'm
              </p>

              <h1>
                Gukan <span className="me-4">G</span>
              </h1>

              <h2>
                Java Full Stack Developer
              </h2>

              <p className="hero-description">
                I build modern web applications using
                <strong> React, Spring Boot and MySQL.</strong>
                I enjoy developing clean user interfaces,
                REST APIs and database-driven applications.
              </p>

              <div className="hero-buttons">

                <button
                  className="btn btn-primary-custom"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

                <button
                  className="btn btn-outline-light ms-2"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </button>

              </div>

              <div className="social-icons mt-4">

                <a
                  href="https://github.com/Gukan-Gunasekaran"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/guna-guku/"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:gunaguku@gmail.com"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>

              </div>

            </div>

            <div className="col-lg-5 text-center">

              <div className="developer-card">

                <div className="code-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <h3>Full Stack</h3>

                <p>
                  React + Spring Boot + MySQL
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="container">

          <div className="section-heading">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="row align-items-center">

            <div className="col-lg-7">

              <h3>
                Building applications from frontend to backend.
              </h3>

              <p>
                I'm a Computer Science graduate interested in
                Java full-stack development. My primary focus is
                developing web applications using React on the
                frontend and Spring Boot on the backend.
              </p>

              <p>
                I also work with MySQL for database design and
                data management. I enjoy learning new technologies
                and turning ideas into working applications.
              </p>

              <button
                className="btn btn-primary-custom"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </button>

            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">

              <div className="about-card">

                <div className="about-item">

                  <i className="bi bi-code-square"></i>

                  <div>
                    <strong>Frontend</strong>
                    <p>React, JavaScript, Bootstrap</p>
                  </div>

                </div>

                <div className="about-item">

                  <i className="bi bi-server"></i>

                  <div>
                    <strong>Backend</strong>
                    <p>Java, Spring Boot, REST API</p>
                  </div>

                </div>

                <div className="about-item">

                  <i className="bi bi-database"></i>

                  <div>
                    <strong>Database</strong>
                    <p>MySQL, SQL</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section dark-section">

        <div className="container">

          <div className="section-heading">
            <span>02</span>
            <h2>Skills</h2>
          </div>

          <p className="section-subtitle">
            Technologies I use to build full-stack applications.
          </p>

          <div className="row g-4">

            {skills.map((skill, index) => (

              <div
                className="col-md-6 col-lg-4"
                key={index}
              >

                <div className="skill-card">

                  <i className={`bi ${skill.icon}`}></i>

                  <h4>{skill.title}</h4>

                  <p>{skill.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="container">

          <div className="section-heading">
            <span>03</span>
            <h2>Projects</h2>
          </div>

          <p className="section-subtitle">
            Some of the applications I have worked on.
          </p>

          <div className="row g-4">

            {projects.map((project, index) => (

              <div
                className="col-lg-4"
                key={index}
              >

                <div className="project-card">

                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-list">

                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}

                  </div>

                  <div className="project-links">

                    <a href={project.github}>
                      <i className="bi bi-github"></i>
                      GitHub
                    </a>

                    <a href={project.demo}>
                      Live Demo
                      <i className="bi bi-arrow-up-right"></i>
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EDUCATION */}
      <section className="section dark-section">

        <div className="container">

          <div className="section-heading">
            <span>04</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>

            <div>

              <h3>
                Masters of Computer Applications
              </h3>

              <h5>
                University College of Engineering ,BIT CAMPUS
              </h5>

              <p>
                Anna University , Trichy
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="section">

        <div className="container">

          <div className="section-heading">
            <span>05</span>
            <h2>Contact</h2>
          </div>

          <div className="row">

            <div className="col-lg-5">

              <h3>
                Let's build something together.
              </h3>

              <p>
                I'm interested in Java full-stack development
                opportunities and software engineering projects.
              </p>

              <div className="contact-info">

                <div>
                  <i className="bi bi-envelope"></i>
                  <span>gunaguku@gmail.com</span>
                </div>

                <div>
                  <i className="bi bi-github"></i>
                  <span>github.com/Gukan-Gunasekaran</span>
                </div>

                <div>
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn Profile</span>
                </div>

              </div>

            </div>

            <div className="col-lg-7 mt-4 mt-lg-0">

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>Name</label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label>Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                      required
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>Subject</label>

                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>Message</label>

                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your message"
                    required
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary-custom"
                >
                  Send Message
                  <i className="bi bi-send ms-2"></i>
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="container text-center">

          <h4>
            Gukan<span>.</span>
          </h4>

          <p>
            Java Full Stack Developer
          </p>

          <div className="footer-social">

            <a href="https://github.com/Gukan-Gunasekaran">
              <i className="bi bi-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/guna-guku/">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="mailto:gunaguku@gmail.com">
              <i className="bi bi-envelope"></i>
            </a>

          </div>

          <hr />

          <small>
            © 2026 Gukan Gunasekaran. All rights reserved.
          </small>

        </div>

      </footer>

    </div>
  );
}

export default App;