const form = document.querySelector('#generator-form');
const promptField = document.querySelector('#prompt');
const status = document.querySelector('#status');
const state = document.querySelector('#result-state');
const preview = document.querySelector('#preview');
const button = document.querySelector('#generate-button');

function showMessage(message, isError = false) {
  status.textContent = message;
  status.classList.toggle('error', isError);
}

function showVideo(url) {
  const video = document.createElement('video');
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  const source = document.createElement('source');
  source.src = url;
  source.type = 'video/mp4';
  video.append(source);
  preview.replaceChildren(video);
}

function showPlaceholder(message) {
  const container = document.createElement('div');
  container.className = 'preview-placeholder';
  const icon = document.createElement('span');
  icon.className = 'play-icon';
  icon.textContent = '!';
  const text = document.createElement('p');
  text.textContent = message;
  container.append(icon, text);
  preview.replaceChildren(container);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const prompt = promptField.value.trim();
  if (!prompt) {
    showMessage('Add a description of your video first.', true);
    promptField.focus();
    return;
  }

  button.disabled = true;
  button.textContent = 'Creating your preview…';
  state.textContent = 'CREATING';
  showMessage('Sending your idea to Light Studio…');
  preview.innerHTML = '<div class="preview-placeholder"><span class="play-icon">✦</span><p>Getting your preview ready…</p></div>';

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        duration: Number(document.querySelector('#duration').value),
        ratio: document.querySelector('#ratio').value,
        style: document.querySelector('#style').value
      })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || 'Video generation did not complete.');

    const videoUrl = data.videoUrl || data.sampleVideoUrl || data.result?.output?.[0] || data.result?.videoUrl;
    if (videoUrl) {
      showVideo(videoUrl);
      state.textContent = data.mode === 'demo' ? 'DEMO PREVIEW' : 'PREVIEW READY';
      showMessage(data.mode === 'demo' ? 'Demo preview shown. Add your Runway API key to enable live generation.' : 'Your video is ready.');
    } else {
      state.textContent = 'REQUEST RECEIVED';
      showMessage('The request was accepted. The provider has not returned a video URL yet.');
      showPlaceholder('Your generation request was accepted. The video may still be rendering.');
    }
  } catch (error) {
    state.textContent = 'COULD NOT GENERATE';
    showMessage(error.message || 'Could not reach the video service. Start the app server and try again.', true);
    showPlaceholder(error.message || 'Could not connect to the video service.');
  } finally {
    button.disabled = false;
    button.innerHTML = 'Generate video <span aria-hidden="true">✦</span>';
  }
});
