(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/config.js-8ef6abba.js")
    );
  })().catch(console.error);

})();
