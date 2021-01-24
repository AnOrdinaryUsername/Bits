const compression = require('compression');
const express = require('express');
const open = require('open');
const os = require('os');
const app = express();

(async () => {
  const PORT = 8080;

  // Allows us to test for gzip.
  app.use(compression());
  app.use(express.static('dist'));

  app.listen(PORT, () => {
    console.log(`Production server started at http://localhost:${PORT}`);
  });

  await open(`http://localhost:${PORT}`, { app: [getChromeBrowser(), '--incognito'] });
})();

function getChromeBrowser() {
  const platform = process.platform;
  let app = '';

  if (platform === 'linux') {
    app = 'google-chrome';

    // For Windows Subsystem for Linux (WSL)
    if (os.release().toLowerCase().includes('microsoft')) {
      app = '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe';
    }
    // MacOS
  } else if (platform === 'darwin') {
    app = 'Google Chrome';
    // Windows
  } else if (platform === 'win32') {
    app = 'chrome';
  }

  return app;
}
