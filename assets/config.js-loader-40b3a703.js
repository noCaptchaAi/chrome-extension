(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/config.js-8c3e9da1.js")
    );
  })().catch(console.error);

})();
