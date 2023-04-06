(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/recap_speech_ai.js-e3de6993.js")
    );
  })().catch(console.error);

})();
