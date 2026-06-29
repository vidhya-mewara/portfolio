const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function getQuote() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;

    } catch (error) {
        console.error(error);

        quoteText.textContent = "Unable to load quote.";
        quoteAuthor.textContent = "";
    }
}

getQuote();

newQuoteBtn.addEventListener("click", getQuote);