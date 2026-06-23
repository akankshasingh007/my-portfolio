export default function Personality() {
  return (
    <section className="bg-white text-black py-24 px-10">

      <h2 className="text-6xl font-black mb-16">
        WHO IS SHE?
      </h2>

      <div className="grid md:grid-cols-2 gap-20">

        <div>
          <h3 className="text-3xl font-bold mb-6">
            About Me
          </h3>

          <ul className="space-y-4 text-xl">
            <li>Engineering Student</li>
            <li>AI Enthusiast</li>
            <li>Scholarship Hunter</li>
            <li>Research Lover</li>
            <li>Builder</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">
            Likes
          </h3>

          <ul className="space-y-4 text-xl">
            <li>Technology</li>
            <li>Artificial Intelligence</li>
            <li>Books</li>
            <li>Opportunities</li>
            <li>Global Programs</li>
          </ul>
        </div>

      </div>

    </section>
  );
}