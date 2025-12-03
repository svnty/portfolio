import React from "react";

export default function WorkPage() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A revolutionary biotech platform for analyzing genomic data.",
      tags: ["React", "Next.js", "Bioinformatics"],
      link: "#",
    },
    {
      title: "Beta Systems",
      description: "Automated lab workflows using Python and robotics.",
      tags: ["Python", "Automation", "Robotics"],
      link: "#",
    },
    {
      title: "Gamma Interface",
      description: "User interface for controlling synthetic biology experiments.",
      tags: ["TypeScript", "WebSockets", "UI/UX"],
      link: "#",
    },
    {
      title: "Delta Analytics",
      description: "Data visualization tool for complex biological datasets.",
      tags: ["D3.js", "Data Viz", "Analytics"],
      link: "#",
    },
  ];

  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-5xl w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Selected Work
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A collection of projects exploring the intersection of biology and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all"
            >
              <div className="aspect-video w-full bg-zinc-800/50 rounded-xl mb-6 overflow-hidden relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-medium">
                  Project Preview
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}