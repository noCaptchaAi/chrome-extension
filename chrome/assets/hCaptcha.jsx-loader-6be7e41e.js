(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/hCaptcha.jsx-218694e1.js")
    );
  })().catch(console.error);

})();
