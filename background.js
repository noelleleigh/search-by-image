const DUCK_URL = "https://duckduckgo.com/";
const BANG = "!rgi";

const searchByImage = ({ srcUrl }) => {
  const query = `${BANG} ${srcUrl}`;
  const params = new URLSearchParams({ q: query });
  const tabUrl = new URL(`?${params.toString()}`, DUCK_URL);
  chrome.tabs.create({ url: tabUrl.toString() });
};

const setUp = () => {
  chrome.contextMenus.create({
    title: "Search Google for image",
    contexts: ["image"],
    onclick: searchByImage,
  });
};

setUp();
