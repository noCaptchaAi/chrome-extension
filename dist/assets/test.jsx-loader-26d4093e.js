(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/test.jsx-4ed993c7.js")
    );
  })().catch(console.error);

})();
