import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function TextPage() {
  const navigate = useNavigate();

  const romanticTexts = [
    "In your eyes, I found the stars that light up my darkest nights. Happy Birthday, my love.",
    "Every moment with you is a treasure, every smile a gift. You are my everything.",
    "To the woman who makes my heart skip a beat, thank you for being you. Forever yours.",
    "Your love is the melody that plays in my soul. Wishing you a day as beautiful as you are.",
    "In this journey of life, you are my favorite destination. Happy Birthday, Nooroh!"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-bg">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-8 primary-text">Romantic Words for You 💕</h1>
        <div className="space-y-6">
          {romanticTexts.map((text, index) => (
            <p key={index} className="text-lg leading-relaxed italic accent-text">
              "{text}"
            </p>
          ))}
        </div>
        <button
          onClick={() => navigate('/therapy')}
          className="mt-8 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow secondary-bg"
        >
          Next: Doctor's Prescription
        </button>
      </div>
    </div>
  );
}