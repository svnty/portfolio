import React from "react";

export default function WhoAmIPage() {
  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-3xl w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Who Am I?
          </h1>
          <h2 className="text-2xl text-zinc-400 font-medium">
            Biotech Engineer & Creative Developer
          </h2>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-lg text-zinc-400 leading-relaxed">
            I am a multidisciplinary engineer operating at the intersection of biological systems and digital technology.
            My work focuses on leveraging software engineering principles to solve complex problems in synthetic biology and healthcare.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed mt-4">
            With a background in both life sciences and computer science, I bridge the gap between wet lab experimentation and computational analysis.
            I build tools that accelerate research, optimize workflows, and visualize complex data.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400">
            <div>
              <div className="text-white font-medium mb-3 text-lg">Biotech & Engineering</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Synthetic Biology & Genetics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Pharmacology & Microbiology</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Lab Automation & Robotics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Mechatronics Systems</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Biomedical Instrumentation</li>
              </ul>
            </div>
            <div>
              <div className="text-white font-medium mb-3 text-lg">Software & AI</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Full Stack & Mobile (Flutter, Next.js, TypeScript)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Machine Learning (KNIME, Python)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Cloud (AWS, Azure, GCP)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Cybersecurity & Privacy</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Rust & C# Programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Associate Member</h4>
              <p className="text-xs text-zinc-500 mt-1">Engineers Australia</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Machine Learning & AI Foundations</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn / KNIME</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Python Data Analysis</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Cloud Platform for Developers</h4>
              <p className="text-xs text-zinc-500 mt-1">AWS, Azure, GCP</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">CompTIA A+ (Physical Networking)</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Rapid Prototyping for Product Design</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Education
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">University of Technology Sydney</h4>
                <div className="text-zinc-400">Bachelor of Engineering (Honours)</div>
                <div className="text-zinc-400">Bachelor of Medical Science</div>
              </div>
              <div className="text-zinc-500 font-mono text-sm text-right sm:text-left">
                Double Degree
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">TAFE NSW</h4>
                <div className="text-zinc-400">4x Certificates in Information Technology</div>
                <p className="text-sm text-zinc-500 mt-1">
                  Specializing in Web Development, Database Design, and Network Security.
                </p>
              </div>
              <div className="text-zinc-500 font-mono text-sm text-right sm:text-left">
                Trade school
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}