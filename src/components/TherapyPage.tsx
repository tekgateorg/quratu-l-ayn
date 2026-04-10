import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function TherapyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 therapy-bg">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-4 primary-border">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold primary-text">Doctor Suleym's Prescription</h1>
          <p className="text-sm accent-text">For Nooroh - Patient of Love</p>
        </div>
        <div className="border-t-2 border-b-2 py-4 mb-4 secondary-border">
          <h2 className="text-xl font-semibold mb-2 primary-text">Daily Doses of Love:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg accent-text">
            <li>Take one deep breath of fresh air every morning - inhale positivity, exhale worries.</li>
            <li>Rest your heart in peaceful moments - allow love to heal.</li>
            <li>Sleep soundly under the stars of dreams - recharge your soul.</li>
            <li>Nourish your spirit with kind thoughts - feed the love within.</li>
            <li>Repeat as needed: "I am loved, I am cherished."</li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-sm italic secondary-text">Prescribed by: Dr. Suleym 💊❤️</p>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/playlist')}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow secondary-bg"
          >
            Next: Soulful Melodies
          </button>
        </div>
      </div>
    </div>
  );
}