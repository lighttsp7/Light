import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

app.use(cors());
app.use(express.json({ limit: '20mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Light Studio is online.' });
});

app.post('/api/generate', async (req, res) => {
  const { prompt, duration = 8, ratio = '16:9', style = 'cinematic', model = 'gen3a_turbo' } = req.body || {};

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({
      ok: false,
      error: 'Please add a prompt describing the video you want.'
    });
  }

  const apiKey = process.env.RUNWAY_API_KEY;

  if (!apiKey) {
    return res.json({
      ok: true,
      mode: 'demo',
      message: 'Demo mode is active. Add RUNWAY_API_KEY to enable live generation.',
      provider: 'Runway',
      prompt,
      duration,
      ratio,
      style,
      model,
      sampleVideoUrl: 'https://videos.pexels.com/video-files/854132/854132-hd_1920_1080.mp4'
    });
  }

  try {
    const runwayRes = await fetch('https://api.runwayml.com/v1/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        prompt,
        duration,
        ratio,
        style,
        taskType: 'text_to_video'
      })
    });

    const data = await runwayRes.json().catch(() => ({}));

    if (!runwayRes.ok) {
      return res.status(runwayRes.status).json({
        ok: false,
        provider: 'Runway',
        error: data?.error || 'Runway request failed.',
        details: data
      });
    }

    return res.json({
      ok: true,
      mode: 'live',
      provider: 'Runway',
      result: data,
      videoUrl: data?.videoUrl || data?.output || null,
      prompt,
      duration,
      ratio,
      style,
      model
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server error while contacting Runway.',
      details: error.message
    });
  }
});

app.use(express.static(publicDir));

app.get('*', (_req, res) => {
  const indexPath = path.join(publicDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
    return;
  }

  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Light Studio running at http://localhost:${port}`);
});
