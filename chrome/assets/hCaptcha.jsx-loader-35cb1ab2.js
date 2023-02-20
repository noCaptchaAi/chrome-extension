(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/hCaptcha.jsx-5c94fe54.js")
    );
  })().catch(console.error);

})();
