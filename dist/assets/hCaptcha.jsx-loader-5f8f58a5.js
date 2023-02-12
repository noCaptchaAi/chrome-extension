(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/hCaptcha.jsx-9eb47d7f.js")
    );
  })().catch(console.error);

})();
