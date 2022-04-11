// This function loads pokemon data from the Pokemon API
function fetchSimpsonQuotesJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
   
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes";

    axios.get(url)
        .then(function (response) {
            return response.data; // response.data instead of response.json() with fetch
        })
        .then(function (simpsonsQuotes) {
            console.log(simpsonsQuotes)
            console.log(simpsonsQuotes[0].quote)
            

            // Build a block of HTML
            const quotesHtml = `
            <p>${simpsonsQuotes[0].character}<p>
            <img src = ${simpsonsQuotes[0].image} alt ="personnage des Simpsons"/>
            <p>${simpsonsQuotes[0].quote}<p>
        `;
            document.querySelector('#simpsons-quotes').innerHTML = quotesHtml;
        });
}

fetchSimpsonQuotesJSON();

const buttonChangeQuote = document.getElementById("button-change-quote");

buttonChangeQuote.addEventListener("click", fetchSimpsonQuotesJSON);


