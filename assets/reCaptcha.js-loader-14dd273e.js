(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/reCaptcha.js-e43f18a5.js")
    );
  })().catch(console.error);

})();
