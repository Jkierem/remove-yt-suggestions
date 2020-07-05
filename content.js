const setDisplayNone = x => x.style.display = "none";
const removeElements = (selectors) => {
    selectors
    .map(s => document.querySelectorAll(s))
    .map(nodes => Array.from(nodes))
    .flat()
    .forEach(setDisplayNone)
}

const removeSuggestions = (event) => {
    if( event.type === "ERASE_SUGGESTIONS_PLEASE"){
        console.log(event)
        const selectors = [
            ".ytp-ce-element.ytp-ce-video.ytp-ce-element-show",
            ".ytp-ce-element.ytp-ce-playlist"
        ]
        removeElements(selectors)
    }
}

chrome.runtime.onMessage.addListener(removeSuggestions);