import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function PlaylistPage() {
  const navigate = useNavigate();

  const nasheeds = [
    { title: "Beautiful Nasheed", src: "/abdul2025-nasheed-432919.mp3" },
    { title: "Gharibun", src: "/gharibun.mp3" },
    { title: "Ramadan Nasheed - Haitham", src: "/haitham_ramadan.mp3" },
    { title: "Muhammed Muqit", src: "/muhammed_muqit.mp3" },
    { title: "Qasidah Istighfar", src: "/qasidah istighfar.mp3" },
    { title: "Sallah Alaykallah", src: "/sallahalaykallah.mp3" },
    { title: "Ya Saddiqi - Friendship", src: "/ya saddiqi_friendship.mp3" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 playlist-bg">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-8 primary-text">Nasheed Playlist 🎵</h1>
        <p className="text-lg mb-6 accent-text">
          Take a dose of these whenever your mind needs a break.
        </p>
        <div className="space-y-4">
          {nasheeds.map((nasheed, index) => (
            <div key={index} className="p-4 player-bg rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 secondary-text">{nasheed.title}</h3>
              <audio controls className="w-full">
                <source src={nasheed.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow secondary-bg"
        >
          Back to Start
        </button>
      </div>
    </div>
  );
}