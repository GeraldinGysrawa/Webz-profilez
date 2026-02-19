export default function Home() {
  return (
    <main className="bg-gray-950 text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="font-bold text-lg">Home</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, we are Geraldin, Ikhsan Zuhri and Harish - KoTA 105👋
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mb-6">
          Information Systems Student passionate about Fullstack Development,
          Cloud Computing, and Modern Web Technologies.
        </p>
        <a
          href="#about"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          Learn More
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I am currently learning modern web development using Next.js, AWS, and
          fullstack technologies. I enjoy building scalable systems and
          continuously improving my engineering skills.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "Laravel", "AWS", "MySQL", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400 mb-4">
          Feel free to reach out for collaboration or opportunities.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          Email Me
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center bg-gray-950 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Geraldin. All rights reserved.
      </footer>
    </main>
  );
}
