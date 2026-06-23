export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-10"
    >
      <h2 className="text-7xl font-black mb-20">
        FEATURED PROJECTS
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-[#1B3528] p-10 rounded-3xl hover:-translate-y-4 transition">
          <h3 className="text-3xl font-bold mb-4">
            IBM AI Project
          </h3>

          <p>
            AI and industry project completed during IBM SkillsBuild.
          </p>
        </div>

        <div className="bg-[#1B3528] p-10 rounded-3xl hover:-translate-y-4 transition">
          <h3 className="text-3xl font-bold mb-4">
            Scholarship Tracker
          </h3>

          <p>
            Tracking opportunities, conferences and programs.
          </p>
        </div>

        <div className="bg-[#1B3528] p-10 rounded-3xl hover:-translate-y-4 transition">
          <h3 className="text-3xl font-bold mb-4">
            Research Portfolio
          </h3>

          <p>
            Academic interests, projects and future research.
          </p>
        </div>

      </div>
    </section>
  );
}