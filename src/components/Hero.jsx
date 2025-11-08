import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-stretch bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center text-xs uppercase tracking-widest text-sky-300/80 mb-3">Healthcare • AI • Random Forest</span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Heart Disease Risk Prediction</h1>
          <p className="mt-4 text-slate-300 text-lg">Enter clinical measurements and get a real-time assessment powered by a trained Random Forest model. Designed for education and screening support.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#predict" className="rounded-md bg-sky-500 hover:bg-sky-400 text-white px-5 py-3 font-medium shadow">
              Start Prediction
            </a>
            <a href="#about" className="rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium backdrop-blur border border-white/10">
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent" />
    </section>
  );
}
