const quotes = [
    {
        quote: `"If your voice is high, only a few people will hear. If your thought is high, then many people will listen"`,
        writer:`"~ Invajy"`
    },
    {
        quote: `"It is during our darkest moments that we must focus to see the light"`,
        writer:`"~ Aristotle Onassis"`
    },
    {
        quote: `"If you’re the smartest person in the room, for sure you’re in the wrong room"`,
        writer:`"~ Invajy"`
    },
    {
        quote: `"Always make a total effort, even when the odds are against you"`,
        writer:`"~ Arnold Palmer"`
    },
    {
         quote: `"Nothing will work unless you do"`,
        writer:`"~ Maya Angelou"`
    },
    {
         quote: `"The best way to get started is to quit talking and begin doing"`,
        writer:`"~ Walt Disney"`
    },
    {
        quote: `"The purpose of our lives is to be happy"`,
        writer:`"~ Dalai Lama"`
   },
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML= quotes[random].writer;
})