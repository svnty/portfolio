import React from "react";

export default function WorkPage() {
  const projects = [
    {
      title: "Alternipedia",
      description: "An open, collaborative encyclopedia designed to emphasize exploring multiple viewpoints on complex topics.",
      tags: ["React", "Next.js", "Wikipedia", "Vercel"],
      link: "https://github.com/alternipedia",
      img: "/alternipedia.png"
    },
    {
      title: "Medicamina",
      description: "A precision medicine platform for personalized treatment recommendations and disease prediction.",
      tags: ["Flutter", "Precision Medicine", "Data Analytics", "Azure Cloud"],
      link: "https://github.com/medicamina",
      img: "/medicamina.png"
    },
    {
      title: "Coreable",
      description: "Tools to expertly measure and map soft skills.",
      tags: ["TypeScript", "GraphQL", "Google Cloud"],
      link: "https://github.com/coreable",
      img: "/coreable.png"
    },
    {
      title: "Zesty",
      description: "A safe platform for adult industry workers to accept payments and report abusive clients.",
      tags: ["Next.js", "Payment Processing", "Escrow", "Google Cloud"],
      link: "https://github.com/zesty-hot",
      img: "/zesty.png"
    },
    {
      title: "Blood cell classifier",
      description: "A machine learning model to identify blood cell categories.",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      link: "https://github.com/svnty/blood-cell-classification/blob/main/notebook.ipynb",
      img: "/bloodcell.png"
    },
    {
      title: "Arduino Community IntelliSense fix",
      description: "A Visual Studio Code extension to fix IntelliSense for Arduino.",
      tags: ["Visual Studio Code", "Arduino", "IntelliSense"],
      link: "https://marketplace.visualstudio.com/items?itemName=svnty.vscode-arduino-intellisense",
      img: "/arduino.png"
    },
    {
      title: "Low earth orbit satellite tracker",
      description: "A 3D printed calculator to track low earth orbit satellites.",
      tags: ["C++", "Arduino", "3D FDM Printing", "Computer Aided Design"],
      link: "https://github.com/svnty/ISS-arduino-tracker",
      img: "/isstracker.jpeg"
    },
    {
      title: "Mendelian genetics simulator",
      description: "A simple rust engine to to simulate genetic inheritence of same-sex attraction.",
      tags: ["Rust", "Genetics", "Bioinformatics"],
      link: "https://github.com/svnty/homosexuality-simulator",
      img: "/gene-simulator.png"
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
            A collection of projects exploring the intersection of humans and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              target="_blank"
              key={index}
              href={project.link}
              className="group block p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all"
            >
              <div className="aspect-video w-full bg-zinc-800/50 rounded-xl mb-6 overflow-hidden relative">
                {/* Placeholder for project image */}
                <img src={project.img} className="absolute inset-0 flex items-center justify-center text-zinc-600 font-medium" />
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