(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/reCaptcha.js-b3eb6ef7.js")
    );
  })().catch(console.error);

})();
