(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/reCaptcha.js-6ff7f8c6.js")
    );
  })().catch(console.error);

})();
