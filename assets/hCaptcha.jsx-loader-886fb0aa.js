(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/hCaptcha.jsx-8494735e.js")
    );
  })().catch(console.error);

})();
