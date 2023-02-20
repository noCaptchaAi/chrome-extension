(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/reCaptcha.js-71f46f02.js")
    );
  })().catch(console.error);

})();
