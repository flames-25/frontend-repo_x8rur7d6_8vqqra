import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const initialState = {
  age: '',
  sex: '1',
  cp: '0',
  trestbps: '',
  chol: '',
  fbs: '0',
  restecg: '0',
  thalach: '',
  exang: '0',
  oldpeak: '',
  slope: '1',
  ca: '0',
  thal: '1',
};

export default function PredictionForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const payload = {
        age: Number(form.age),
        sex: Number(form.sex),
        cp: Number(form.cp),
        trestbps: Number(form.trestbps),
        chol: Number(form.chol),
        fbs: Number(form.fbs),
        restecg: Number(form.restecg),
        thalach: Number(form.thalach),
        exang: Number(form.exang),
        oldpeak: Number(form.oldpeak),
        slope: Number(form.slope),
        ca: Number(form.ca),
        thal: Number(form.thal),
      };
      const res = await fetch(`${backend}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: 'Failed to fetch prediction. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="predict" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800">Enter Patient Data</h2>
          <p className="text-slate-500 text-sm mb-6">All values are required for a reliable estimate.</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Age" name="age" value={form.age} onChange={handleChange} type="number" min="0" required />
            <Select label="Sex" name="sex" value={form.sex} onChange={handleChange} options={{ '1': 'Male', '0': 'Female' }} />
            <Select label="Chest Pain Type (cp)" name="cp" value={form.cp} onChange={handleChange} options={{ '0': 'Typical Angina', '1': 'Atypical Angina', '2': 'Non-anginal', '3': 'Asymptomatic' }} />
            <Input label="Resting BP (trestbps)" name="trestbps" value={form.trestbps} onChange={handleChange} type="number" min="0" required />
            <Input label="Serum Cholesterol (chol)" name="chol" value={form.chol} onChange={handleChange} type="number" min="0" required />
            <Select label="Fasting Blood Sugar (fbs)" name="fbs" value={form.fbs} onChange={handleChange} options={{ '0': '<= 120 mg/dl', '1': '> 120 mg/dl' }} />
            <Select label="Resting ECG (restecg)" name="restecg" value={form.restecg} onChange={handleChange} options={{ '0': 'Normal', '1': 'ST-T abnormality', '2': 'Left ventricular hypertrophy' }} />
            <Input label="Max Heart Rate (thalach)" name="thalach" value={form.thalach} onChange={handleChange} type="number" min="0" required />
            <Select label="Exercise Induced Angina (exang)" name="exang" value={form.exang} onChange={handleChange} options={{ '0': 'No', '1': 'Yes' }} />
            <Input label="ST Depression (oldpeak)" name="oldpeak" value={form.oldpeak} onChange={handleChange} type="number" step="0.1" required />
            <Select label="Slope" name="slope" value={form.slope} onChange={handleChange} options={{ '0': 'Upsloping', '1': 'Flat', '2': 'Downsloping' }} />
            <Select label="Major Vessels (ca)" name="ca" value={form.ca} onChange={handleChange} options={{ '0': '0', '1': '1', '2': '2', '3': '3' }} />
            <Select label="Thalassemia (thal)" name="thal" value={form.thal} onChange={handleChange} options={{ '1': 'Normal', '2': 'Fixed defect', '3': 'Reversible defect' }} />

            <div className="md:col-span-2 mt-2">
              <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-medium shadow disabled:opacity-60">
                {loading ? (<><Loader2 className="animate-spin" size={18} /> Predicting...</>) : 'Predict'}
              </button>
            </div>
          </form>
        </div>

        <div>
          <ResultCard result={result} />
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, ...props }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-slate-600">{label}</span>
      <input name={name} value={value} onChange={onChange} {...props} className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
    </label>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-slate-600">{label}</span>
      <select name={name} value={value} onChange={onChange} className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400">
        {Object.entries(options).map(([val, label]) => (
          <option key={val} value={val}>{label}</option>
        ))}
      </select>
    </label>
  );
}

function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full flex items-center justify-center text-slate-500">
        Submit the form to see prediction results here.
      </div>
    );
  }
  if (result.error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6">
        {result.error}
      </div>
    );
  }
  const isHigh = (result.prediction || '').toLowerCase().includes('high');
  const prob = result.probability != null ? Math.round(result.probability * 100) : null;
  return (
    <div className={`rounded-xl p-6 shadow-sm border ${isHigh ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
      <h3 className="text-lg font-semibold mb-2">{isHigh ? '⚠️ High Risk of Heart Disease' : '✅ No Heart Disease Detected'}</h3>
      {prob !== null && <p className="text-slate-700">Confidence: <span className="font-semibold">{prob}%</span></p>}
      {result.details && (
        <div className="mt-3 text-sm text-slate-600">
          <p>Model: Random Forest</p>
          <p>Accuracy: {Math.round((result.accuracy || 0) * 100)}%</p>
        </div>
      )}
    </div>
  );
}
