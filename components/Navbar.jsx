export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 px-10 py-6 flex justify-between">
      <h1 className="text-3xl font-black">
        AKANKSHA
      </h1>

      <div className="flex gap-8">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}