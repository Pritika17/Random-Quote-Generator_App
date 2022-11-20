const btn = document.querySelector(".btn")
const quote = document.querySelector(".quote")

document.addEventListener("DOMContentLoaded", getQuote)
btn.addEventListener("click", getQuote)

function getQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quote.innerText = result.content;

    })
}