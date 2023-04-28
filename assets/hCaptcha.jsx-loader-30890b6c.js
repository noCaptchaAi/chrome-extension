(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/hCaptcha.jsx-07c39e6f.js")
    );
  })().catch(console.error);

})();
