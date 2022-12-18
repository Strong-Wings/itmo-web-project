let start = new Date().getTime();

function pageLoad()
{
    let loadTime = (new Date().getTime() - start) / 1000;
    let pageLoad = document.getElementById("page_load");
    pageLoad.innerText = loadTime;
}

window.addEventListener("load", _ => { pageLoad() })
