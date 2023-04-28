(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/recap_speech_ai.js-fb80026a.js")
    );
  })().catch(console.error);

})();
