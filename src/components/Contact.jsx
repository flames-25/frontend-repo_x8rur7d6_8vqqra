export default function Contact() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">Created by <span className="font-medium text-slate-800">Bharath Reddy</span></p>
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex items-center gap-2">
          <input type="email" placeholder="Your email" className="w-full md:w-64 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <button className="rounded-md bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-medium shadow">Contact</button>
        </form>
        <div className="text-xs text-slate-500">© {new Date().getFullYear()} CardioSense</div>
      </div>
    </footer>
  );
}
