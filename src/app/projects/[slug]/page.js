
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Layers,
} from "lucide-react";

import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const technologies = project.technologies || [];
  const features = project.features || [];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Takia Nova<span className="text-indigo-600">.</span>
          </Link>

          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            <ArrowLeft size={17} />
            All Projects
          </Link>
        </div>
      </header>

      {/* Project Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
          <Code2 size={16} />
          Featured Project
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              {project.subtitle}
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              {project.title}
              <span className="text-indigo-600">.</span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Live Preview
                <ExternalLink size={17} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
              >
                <Code2 size={18} />
                Source Code
              </a>

            </div>
          </div>

          {/* Project Visual */}
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-800 p-10 text-white shadow-xl md:min-h-[380px]">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/20" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-white/20" />

            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur">
                <Layers size={48} />
              </div>

              <p className="text-3xl font-bold">
                {project.title}
              </p>

              <p className="mt-3 text-sm text-indigo-100">
                Designed & Developed by Takia Nova
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <Code2 className="text-indigo-600" />
            <h2 className="text-2xl font-bold">
              Technologies Used
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            What It Offers
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Key Features
          </h2>

          <p className="mt-3 text-slate-600">
            Some of the main features implemented in this project.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <CheckCircle2 size={23} />
              </div>

              <h3 className="font-semibold leading-7 text-slate-800">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Project CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 px-8 py-14 text-center text-white md:px-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            Explore The Project
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Interested in my work?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Explore the live application or check out the source code
            to learn more about how this project was built.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-600"
            >
              Visit Live Website
              <ArrowUpRight size={18} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800"
            >
              <Code2 size={18} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Takia Sultana Nova. All rights reserved.
          </p>

          <Link
            href="/"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Back to Portfolio ↑
          </Link>
        </div>
      </footer>

    </main>
  );
}
