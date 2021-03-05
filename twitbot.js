console.log('The Bot Has Started')

var Twit = require('twit')
var fs = require('fs')

var T = new Twit({
  consumer_key:         '9D8E0eOkbyPfWrIH2APPWWg71',
  consumer_secret:      'w0dqpizUJZv1Z5s6dzzY5HoaYutp0g73q0M7RedkoR3wcADClX',
  access_token:         '1367530476060225537-7bBCbDDWYJWGXkoPlIWfJ64hNWND1P',
  access_token_secret:  'hpCH5UpUErTmrUhdMLReAwgEhak56xDRnZea1RXPVWnWM',
})

//var txt_file = "Food_Types.txt"

function post_tweet(text) {
    var tweet = {
      status: text
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
      console.log(data)
    }
}


function randomWords(words, txt_file){

    // Since you use 'readFileSync', there is no callback function
    var readME = fs.readFileSync(txt_file, 'utf8');

    // Split the string into an array
    var wordArr = readME.split('\n'[0]);

    // Check if the specified amount of words is bigger than
    // the actual array length (word count) so we don't end
    // up in an infinite loop
    words = words > wordArr.length ? wordArr.length : words;

    // Create empty array
    var randWords = [];

    // push a random word to the new array n times
    for (let i = 0; i < words; i++){

        // new random number
        let newRandom;
        do {
            // New random index based on the length of the array (word count)
            let rand = Math.floor(Math.random() * wordArr.length);
            newRandom = wordArr[rand];
        }
        // Make sure we don't have duplicates
        while (randWords.includes(newRandom));

        // Add the new word to the array
        randWords.push(newRandom);
    }

    // Join the array to a string and return it
    return randWords.join(', ');
}

// You can pass the amount of words you want to the function

//console.log(randomWords(1, "Food_Types.txt"));

post_tweet(randomWords(1, "Cultures.txt") + randomWords(1, "Cooking_Methods.txt") + randomWords(1, "Food_Adj.txt"))
//read_txt('Food_Types.txt');
