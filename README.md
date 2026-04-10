# Nooroh's Birthday Website

A beautiful, responsive birthday website for Nooroh with multiple pages leading through a romantic journey.

## Features

- **Homepage**: Welcome page with responsive design (image and text side-by-side on desktop, image as background on mobile)
- **Video Page**: Full-page video message
- **Text Page**: Collection of romantic messages
- **Therapy Page**: Doctor's prescription styled romantic advice
- **Playlist Page**: Islamic nasheed links for soulful melodies

## Customization

### Colors
Edit the CSS variables in `src/index.css` to change colors easily:

```css
:root {
  --primary-blue: #3b82f6; /* Blue */
  --accent-pink: #ec4899; /* Pink */
  --secondary-purple: #8b5cf6; /* Purple */
  --neutral-white: #ffffff;
  --neutral-gray: #f3f4f6;
}
```

### Content
- Replace `/placeholder-girlfriend.jpg` in `public/` with Nooroh's actual photo
- Replace `/birthday-message.mp4` in `public/` with your video message
- Update romantic texts in `src/components/TextPage.tsx`
- The Islamic nasheed MP3 files are already in `public/` and matched in the playlist

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
