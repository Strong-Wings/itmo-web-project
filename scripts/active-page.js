(function() {
    document.addEventListener("DOMContentLoaded", () => {
        displayActiveButton()
    })
})();

function displayActiveButton() {
    const navigationLinks = document.querySelectorAll('.top-inline');
    if (document.location.pathname.includes("index.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'main').classList.add('button_navigation_active')
    }

    if (document.location.pathname.includes("cars.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'cars').classList.add('button_navigation_active')
    }

    if (document.location.pathname.includes("search-results.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'search').classList.add('button_navigation_active')
    }
}