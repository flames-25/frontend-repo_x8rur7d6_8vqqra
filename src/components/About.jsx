import { BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800">About the Project</h2>
          <p className="text-slate-600 mt-3">
            This app demonstrates educational heart disease risk screening using the UCI Heart Disease dataset. It uses a Random Forest classifier trained on clinical features like age, blood pressure, cholesterol, and exercise-induced angina.
          </p>
          <ul className="mt-4 text-slate-600 list-disc list-inside space-y-1">
            <li>Dataset: UCI Heart Disease (Cleveland)</li>
            <li>Model: Random Forest (n_estimators=100, random_state=42)</li>
            <li>Backend: FastAPI</li>
            <li>Frontend: React + Tailwind</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">Note: This is not a medical device. For clinical decisions, consult a licensed professional.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="text-sky-600" />
            <h3 className="font-semibold text-slate-800">Feature Importance (sample)</h3>
          </div>
          <div className="space-y-3 mt-4">
            {[
              { name: 'cp', val: 0.22 },
              { name: 'thalach', val: 0.18 },
              { name: 'oldpeak', val: 0.14 },
              { name: 'ca', val: 0.12 },
              { name: 'age', val: 0.1 },
            ].map((f) => (
              <div key={f.name}>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{f.name}</span>
                  <span>{Math.round(f.val * 100)}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded">
                  <div className="h-2 bg-sky-500 rounded" style={{ width: `${f.val * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
