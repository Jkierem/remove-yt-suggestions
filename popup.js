const createToogle = (id,text,toggled=false) => {
    const check = document.createElement("input")
    check.setAttribute("id",id)
    check.setAttribute("type","checkbox")
    check.setAttribute("checked",toggled)
    const label = document.createElement("label");
    label.setAttribute("for",id)
    label.innerHTML = text;
    const container = document.createElement("div");
    container.append(check,label)
    return container
}

const onClick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            type:"ERASE_SUGGESTIONS_PLEASE",
            data: [ "one", "two", "three" ]
        });
    });
}

document
.getElementById("action")
.addEventListener("click",onClick)

const options = [
    { id: "links", label: "Remove links" },
    { id: "videos", label: "Remove videos" },
    { id: "channels", label: "Remove channels" },
    { id: "playlists", label: "Remove playlists" }
]

const form = document.getElementById("settings")

const checks = options.map( opts => {
    return createToogle(opts.id,opts.label)
})

form.append(...checks)