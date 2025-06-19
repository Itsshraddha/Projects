const quotes = [
    "🤞Don’t be afraid,The end and the beginning, beginning and the end are connected ",
    "🌟Your presence can give happiness. I hope you remember that",
    " ❝ Those who keep trying without giving up are the ones who succeed ❞ ",
    " ❝ Effort is a part of yourself, so don’t be ashamed ❞ ",
    " ❝ If you think you’re going to crash, step on the pedal harder ❞",
    "🔗 Let’s not be sad. Let’s all be happy ",
    "✨ Go on your path, even if you live for a day",
    "💜 Never give up on a dream that you’ve been chasing almost your whole life ",
    " ❝ Don’t be trapped in someone else’s dream  ❞",
    " ❝ You can’t just come into someone’s life, make them feel special, and then leave ❞"
];

function generateQuote() {
    const quoteBox = document.getElementById("quote-box");
    const quoteText = document.getElementById("quote");

    // Animate fade-out
    quoteBox.classList.remove("visible");

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];

        // Animate fade-in
        quoteBox.classList.add("visible");
    }, 300);
}
