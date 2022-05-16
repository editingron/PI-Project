var weather;

    var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey ='&appid=b2667b5b88c343dd0ab0a0f471995e30';
    var units ='&units=imperial';

    var input;
   
function setup(){
   var button = select("#submit");
    button.mousePressed(tempAsk);

    input = select("#city");
}

function tempAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}
