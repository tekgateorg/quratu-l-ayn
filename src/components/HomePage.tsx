import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 home-bg">
      <div
        className="max-w-4xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:flex md:flex-row md:gap-4 md:items-center bg-girlfriend"
      >
        <div className="md:hidden w-full h-64 rounded-lg mb-6 bg-girlfriend"></div>
        <div className="hidden md:block w-1/2">
          <img src="/bg_1.jpeg" alt="" className='w-full h-full' />
        </div> {/* Spacer for desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 primary-text">
            Happy Birthday, Noorou-l-ayni! 💖
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 accent-text">
            To the one who saw and soothed my lonely heart when the world overlooked it,
            these are few doses of my gratitude. To be taken according to doctor Suleym's
            😇 prescription.
          </p>
          <button
            onClick={() => navigate('/video')}
            className="px-6 py-3 rounded-full mx-auto text-white font-semibold shadow-lg hover:shadow-xl transition-shadow secondary-bg"
          >
            Next: A Special Message
          </button>
        </div>
      </div>
    </div>
  );
}