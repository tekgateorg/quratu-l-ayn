import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function TextPage() {
  const navigate = useNavigate();

  const romanticTexts = [
    `i was told dreams are like stars
    i was told they might never be touched
    i was told just to follow it path
    i was told my destiny lies in it heart`,

    `so i stared at the sky all night
    so i walked through the blazing sun
    that it may lead me through the night
    or perhaps guide my path in the day`,

    `in your eyes are the stars
    the ones i longed for all these years
    in your heart is my path
    the ones i should walk through to be alright`,

    `glorious is the day those stars were born
    blessed is the day it found my lonely home
    glory be the day it would be my own
    happy birthday to my own portion of this world`
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-bg">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-8 primary-text">Heart Words for You 💕</h1>
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