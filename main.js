let btn = document.querySelector("#toggle-btn");
let btnSpan = document.querySelector("#toggle-btn > span");
let cards = document.querySelectorAll(".box");
let dark = document.querySelectorAll(".dark");

if (localStorage.getItem("theme")) {
    dark.forEach((elemnet) => {
        if (localStorage.getItem("theme") === "dark") {
            elemnet.classList[elemnet.classList.length - 1] = "dark";
        } else {
            elemnet.classList.toggle("dark");
        }
    });
}

btn.addEventListener("click", () => {
    dark.forEach((elemnet) => {
        elemnet.classList[elemnet.classList.length - 1] === "dark"
            ? localStorage.setItem("theme", "light")
            : localStorage.setItem("theme", "dark");
        elemnet.classList.toggle("dark");
    });
});