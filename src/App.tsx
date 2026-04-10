import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';
import TextPage from './components/TextPage';
import TherapyPage from './components/TherapyPage';
import PlaylistPage from './components/PlaylistPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/therapy" element={<TherapyPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
}
