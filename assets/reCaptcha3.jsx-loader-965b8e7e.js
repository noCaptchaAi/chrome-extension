(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/reCaptcha3.jsx-fbe3f8f5.js")
    );
  })().catch(console.error);

})();
