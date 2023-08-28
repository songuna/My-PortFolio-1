const quotes = [
    {
        quote: "일단 시작해라. 나중에 완벽해지면 된다.",
        author: "-론 무어-",
    },

]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;