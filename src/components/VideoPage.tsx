import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function VideoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center video-bg">
      <video
        controls
        autoPlay
        className="w-full h-full object-cover video-max-height"
      >
        <source src="/birthday-message.mp4" type="video/mp4" /> {/* Replace with actual video */}
        Your browser does not support the video tag.
      </video>
      <button
        onClick={() => navigate('/text')}
        className="mt-4 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow secondary-bg"
      >
        Next: Romantic Words
      </button>
    </div>
  );
}