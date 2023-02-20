(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/config.js-a104c9db.js")
    );
  })().catch(console.error);

})();
