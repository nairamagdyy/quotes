var quote = document.getElementById("quote");
var auth = document.getElementById("auth");

// function addQuote() {

//     if (quote.innerHTML === "The best revenge is massive success.") {
//         quote.innerHTML = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
//         auth.innerHTML = "--Marilyn Monroe"
//     }
//     else if (quote.innerHTML == "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”") {
//         quote.innerHTML = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
//         auth.innerHTML = "--Albert Einstein"
//     }
//     else if (quote.innerHTML === "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.") {
//         quote.innerHTML = "So many books, so little time."
//         auth.innerHTML = "--Frank Zappa"
//     }
//     else {
//         quote.innerHTML = "The best revenge is massive success.";
//         auth.innerHTML = "--Frank Sinatra"
//     }
// }

var quotes = {
    newQuote: ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "The best revenge is massive success.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."],
    newAuth: ["--Marilyn Monroe", "--Frank Sinatra", "--Frank Zappa"],
    addQuote: function () {
        var i = Math.random() * this.newQuote.length | 0;
        quote.innerHTML = this.newQuote[i];
        auth.innerHTML = this.newAuth[i];
        console.log(i)

    }
}

