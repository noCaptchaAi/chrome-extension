(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/hCaptcha.jsx-4bf10c7b.js")
    );
  })().catch(console.error);

})();
