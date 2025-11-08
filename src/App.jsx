import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PredictionForm from './components/PredictionForm.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <PredictionForm />
      <About />
      <Contact />
    </div>
  );
}

export default App;
