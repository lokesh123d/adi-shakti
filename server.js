import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Check if in production and build/dist directory exists, and serve from it
const staticPath = process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, 'dist'))
  ? path.join(__dirname, 'dist')
  : __dirname;

console.log(`Serving static files from: ${staticPath}`);

// Serve static assets
app.use(express.static(staticPath));

// Fallback to index.html for any other requests (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
