(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/recap_speech_ai.js-5560757f.js")
    );
  })().catch(console.error);

})();
