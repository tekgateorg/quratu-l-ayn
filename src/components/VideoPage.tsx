import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function VideoPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen video-bg">
      <video
        controls
        className="video-fullscreen object-contain"
      >
        <source src="/birthday_message.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={() => navigate('/text')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow secondary-bg z-10"
      >
        Next: Heart Words
      </button>
    </div>
  );
}