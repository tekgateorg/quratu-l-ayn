import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function PlaylistPage() {
  const navigate = useNavigate();

  const nasheeds = [
    { title: "Ya Nabi Salam Alayka", src: "/nasheed1.mp3" },
    { title: "The Beauty of Existence", src: "/nasheed2.mp3" },
    { title: "Allahumma Salli Ala Muhammad", src: "/nasheed3.mp3" },
    { title: "Peace Be Upon You", src: "/nasheed4.mp3" },
    { title: "Islamic Nasheed Collection", src: "/nasheed5.mp3" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 playlist-bg">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-8 primary-text">Islamic Nasheed Playlist 🎵</h1>
        <p className="text-lg mb-6 accent-text">
          Let these soulful melodies fill your heart with peace and tranquility.
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