"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Menu,
  X,
  ArrowUpRight,
  Download,
  ExternalLink,
  Code2,
  Moon,
  Sun,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Globe,
} from "lucide-react";

import { projects } from "@/data/projects";

const skills = [
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 82, category: "Frontend" },
  { name: "Next.js", level: 78, category: "Frontend" },
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 82, category: "Frontend" },
  { name: "TypeScript", level: 65, category: "Language" },
  { name: "Python", level: 60, category: "Language" },
  { name: "REST API", level: 75, category: "Backend" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "MongoDB", level: 40, category: "Learning" },
  { name: "Node.js", level: 40, category: "Learning" },
];

const achievements = [
  "NASA Space Apps Challenge 2023 – Regional 2nd Runner-up",
  "NASA Space Apps Challenge 2022 – National Finalist",
  "IEEE Computer Society IIUC Student Branch – Vice Chair (2023–2025)",
  "IEEE Women in Engineering – General Secretary",
  "Co-author of IEEE conference publications in AI/ML and computational research",
];

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((previous) => !previous);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <main className={dark ? "portfolio dark" : "portfolio"}>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">N.</span>
          <span>
            Takia Nova<span className="logo-dot">.</span>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a href="#contact" className="nav-cta">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero section-container">
        <div className="hero-content">
          <div className="availability">
            <span className="pulse"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Takia Sultana <span>Nova.</span>
          </h1>

          <h2>Junior Frontend Developer</h2>

          <p className="hero-description">
            I build responsive, user-friendly web experiences with
            React.js and Next.js. I enjoy turning ideas into
            practical digital products that solve real problems.
          </p>

          <div className="hero-location">
            <MapPin size={16} />
            Chattogram, Bangladesh
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="/resume.pdf" download className="btn-outline">
              Download Resume <Download size={17} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/TakiaNova"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 />
            </a>

            <a
              href="https://www.linkedin.com/in/takia-sultana/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Globe />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-xl">
  <Image
    src="/images/profile.jpeg"
    alt="Takia Sultana Nova"
    fill
    priority
    className="object-cover"
  />
</div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-container">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>
            More than just <span>code.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">
              I'm a Computer Science graduate who believes technology
              should make everyday life a little easier.
            </p>

            <p>
              My programming journey started with curiosity about how
              websites work. That curiosity gradually turned into a
              passion for building responsive interfaces and useful
              web applications. Today, I work with JavaScript, React.js
              and Next.js, learning something new with every project.
            </p>

            <p>
              I enjoy solving frontend problems, working with APIs,
              exploring clean UI design and transforming ideas into
              working products. I'm still growing as a developer, and
              that's something I genuinely enjoy.
            </p>

            <p>
              Outside coding, I lead RoadBook BD, a women-focused
              mobility initiative. I also enjoy research, leadership,
              travelling and exploring ideas that create positive
              social impact.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <strong>03+</strong>
              <span>Featured Projects</span>
            </div>

            <div className="stat-card">
              <strong>2025</strong>
              <span>CSE Graduate</span>
            </div>

            <div className="stat-card">
              <strong>2019</strong>
              <span>Started RoadBook</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Curiosity to Learn</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>
              Skills & <span>Technologies.</span>
            </h2>
            <p>Tools I use, explore and continuously improve.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-info">
                  <strong>{skill.name}</strong>
                  <span>{skill.category}</span>
                </div>

                <div className="skill-track">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <p className="learning-note">
            Currently learning: Node.js · MongoDB · Better Auth
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-container">
        <div className="section-heading">
          <p className="eyebrow">MY BACKGROUND</p>
          <h2>
            Education & <span>Learning.</span>
          </h2>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <GraduationCap />
          </div>

          <div>
            <span className="timeline-date">2021 — 2025</span>
            <h3>B.Sc. in Computer Science and Engineering</h3>
            <p>
              International Islamic University Chittagong (IIUC)
            </p>
            <span className="result">CGPA: 3.05 / 4.00</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="eyebrow">WHAT I'VE DONE</p>
            <h2>
              Experience & <span>Leadership.</span>
            </h2>
          </div>

          <div className="experience-card">
            <div className="experience-icon">
              <Briefcase />
            </div>

            <div>
              <span className="timeline-date">
                December 2019 — Present
              </span>

              <h3>Founder & CEO – RoadBook BD</h3>

              <p className="experience-subtitle">
                Entrepreneurship · Product Coordination · Social Impact
              </p>

              <ul>
                <li>
                  Lead digital initiatives for a women-focused mobility venture.
                </li>
                <li>
                  Coordinate with technical team members on product development.
                </li>
                <li>
                  Translate user needs into product requirements and digital service improvements.
                </li>
                <li>
                  Build partnerships and lead community-focused initiatives.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Projects I've <span>Built.</span>
          </h2>
          <p>
            A selection of projects where ideas meet implementation.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <div className="project-preview">
                <span className="project-number">
                  0{index + 1}
                </span>

                <Code2 size={42} />

                <span className="project-category">
                  Web Development
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-subtitle">
                  {project.subtitle}
                </p>

                <p>{project.description}</p>

                <div className="tech-tags">
                  {(project.technologies || [])
                    .slice(0, 4)
                    .map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                </div>

                <div className="project-actions">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-primary"
                  >
                    View Details <ArrowUpRight size={16} />
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label="Live project"
                  >
                    <ExternalLink size={19} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label="GitHub repository"
                  >
                    <Code2 size={19} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section achievements-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="eyebrow">MILESTONES</p>
            <h2>
              Achievements & <span>Recognition.</span>
            </h2>
          </div>

          <div className="achievement-list">
            {achievements.map((item, index) => (
              <div className="achievement-item" key={index}>
                <Award size={21} />
                <p>{item}</p>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section section-container contact-section"
      >
        <div className="contact-box">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's build something <span>meaningful.</span>
          </h2>

          <p>
            I'm open to junior frontend developer opportunities,
            collaborations and interesting projects.
          </p>

          <a href="mailto:your-email@example.com" className="btn-primary">
            Get In Touch <ArrowUpRight size={18} />
          </a>

          <div className="contact-details">
            <a href="tel:+8801823428293">
              <Phone size={17} /> +8801823428293
            </a>

            <a
              href="https://github.com/TakiaNova"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/takia-sultana/"
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={17} /> LinkedIn
            </a>

            <span>
              <MapPin size={17} /> Chattogram, Bangladesh
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-mark">N.</span> Takia Nova.
        </a>

        <p>
          Designed & built with curiosity by Takia Sultana Nova © 2026
        </p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>

    </main>
  );
}
