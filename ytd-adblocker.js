// ==UserScript==
// @name        YouTube Adblocker
// @description Block Ads in YouTube
// @match       *.youtube.com*
// @run-at      document-start
// ==/UserScript==

/* CSS that is added to page for hiding the elements */

/* "id=comments" -> "#comments"
 * "<ytd-merch-shelf-renderer" -> ".ytd-merch-shelf-renderer" */

var css = {
  "hideHomeBanner": `
    #masthead-ad, .ytd-video-masthead-ad-v3-renderer {
      display: none !important;
    }`,

  "hideMerch": `
    .ytd-merch-shelf-renderer {
      display: none !important;
    }`,
  
  "hidePlayerAds": `
    #player-ads {
      display: none !important;
  }`,
};

// Element, that will contain CSS of activated settings
var style = document.createElement('style');

// Execute general settings, only if the timeout isn't active
for (setting in generalSettings) {
  style.textContent += css[setting];
}

document.head.appendChild(style);
