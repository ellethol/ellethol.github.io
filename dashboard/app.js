/*global $*/
/*global weather*/
/*global url*/
/*global apiKey*/
/*global navigator*/
/*global news*/

function loadDate(){
    var currentDate = new Date();
    var dateString = currentDate.toString()
                        .split(" ")
                        .splice(0, 4) //making the string contain only the first four words
                        .join(" ");
                        
    $("#date").text(dateString);
}

function loadWeather() {
    var weather = $("#weather");
    var url = "https://api.forecast.io/forecast/"; //Dark Sky API url
    var apiKey = "48984052d6e8e4ac49086267637146b1"; // API key from Dark Sky
}

function success(position) {
    var lagitude = position.coords.lagitude; //lagitude using geolocation
    var longitude = position.coords.longitude; //longitude using geolocation
    
    //API request
    $.getJSON(url = apiKey = "/" + lagitude + "," + longitude + "?callback=?", function(data) {
        weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
    });
}

    //This message is displayed if there is a geolocation error
    function error() {
        alert("Unable to retrieve your location for weather");
    }
    
    //calling the geolocation API
    navigator.geolocation.getCurrentPosition(success, error);
    
    //The text that will be displayed while the function is making the request
    weather.text("fetching weather...");
    
    function loadNews() {
    var news = $("#news");
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey="; // News API url
    var apiKey = "46fb40e44fcb4224939eea45ed308435"; // API key from News API


 $.getJSON(url + apiKey, function(data) {

    // map() method to call article urls and titles

    var titles = data.articles.map(function(articles) {
      return "<a href='" + articles.url + "'>" + articles.title + "</a>";
    });

     // joining the titles with two line breaks

    news.html(titles.join("<br><br>"));
  });

  // the text that will be displayed while the function is making the request
  news.text("fetching news..."); 
}

alert("aa");

loadDate();
loadWeather();
loadNews();