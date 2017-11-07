var Twit = require('twit'); // this is how we import the twit package

var config = require('./config') //this is we import the config 

var T = new Twit(config); //this is the object of twit which will help us to call functions inside it
var params = {
q: 'a',
count: 10
} // this is the param variable

T.get('search/tweets', params,searchedData); 
// get is the function to search the tweet which three paramaters 'search/tweets'
//,params and a callback function.

function searchedData(err, data, response) {
console.log(data);
} // searchedData function is a callback function which returns the data when we make a search