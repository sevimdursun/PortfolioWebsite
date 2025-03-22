document.addEventListener("DOMContentLoaded", function () {
    console.log("Selin's site ready!");

    const links = document.querySelectorAll("nav a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) section.scrollIntoView({ behavior: "smooth" });
        });
    }
});