(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/rcfast.js-4ed993c7.js")
    );
  })().catch(console.error);

})();
