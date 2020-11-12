// ==UserScript==
// @name        YouTube Adblocker
// @description Block Ads in YouTube
// @match       *.youtube.com*
// @run-at      document-start
// ==/UserScript==

/* Change the word after the name of a setting (and after the column character) to
 * true to enable it and to false to disable it (DO NOT REMOVE THE COMMA AFTER THE WORD)
 * For example, enabled hideFeed will look like this: "hideFeed" : true,
 */

var generalSettings = {
  "hideMerch"    : false,
  "hideHomeBanner" : true,
  "hidePlayerAds" : true
};

/************************************/
/* END OF USER CONFIGURABLE OPTIONS */
/************************************/

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
  if (!generalSettings[setting]) continue;

  style.textContent += css[setting];
}

document.head.appendChild(style);
