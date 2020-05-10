const DUCK_URL = "https://duckduckgo.com/";
const BANG = "!rgi";

/**
 * Make a `!rgi` bang request to DuckDuckGo with the provided URL.
 * @param {Object} info
 * @param {String} info.srcUrl
 */
const searchByImage = ({ srcUrl }) => {
  const query = `${BANG} ${srcUrl}`;
  const params = new URLSearchParams({ q: query });
  const tabUrl = new URL(`?${params.toString()}`, DUCK_URL);
  chrome.tabs.create({ url: tabUrl.toString() });
};

/**
 * Create the context menu entry for images
 */
chrome.contextMenus.create({
  title: "Search Google for image",
  contexts: ["image"],
  onclick: searchByImage,
});
