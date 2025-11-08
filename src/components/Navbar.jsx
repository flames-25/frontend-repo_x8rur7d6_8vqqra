import { HeartPulse } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartPulse className="text-sky-600" />
          <span className="font-semibold text-slate-800">CardioSense</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-sky-700" href="#home">Home</a>
          <a className="hover:text-sky-700" href="#predict">Prediction</a>
          <a className="hover:text-sky-700" href="#about">About</a>
          <a className="hover:text-sky-700" href="#contact">Contact</a>
        </nav>
        <a href="#predict" className="inline-flex items-center rounded-md bg-sky-600 text-white text-sm px-3 py-2 shadow hover:bg-sky-700 transition">
          Start Prediction
        </a>
      </div>
    </header>
  );
}
