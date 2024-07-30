const jokes = require("give-me-a-joke");
console.log('hello');
jokes.getRandomCNJoke(function (joke) {
    console.log(joke);
});
