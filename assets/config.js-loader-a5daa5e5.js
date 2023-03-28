(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/config.js-0c614c07.js")
    );
  })().catch(console.error);

})();
