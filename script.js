var apiKey = "2ef800681313df980f1caa85997c2cfb";

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons(){
    document.getElementById('citySubmit').addEventListener("click", function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var city = document.getElementById("city");
        var countryCity = document.getElementById("countryCity");

        req.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + ", " + countryCity.value + "&appid=" + apiKey + "&units=imperial", true);
        req.addEventListener('load', function() {
            if(req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById("weatherOutput").innerText = 
                    "Temperature: " + response.main.temp + "°F" +
                    "\nConditions: " + response.weather[0].description +
                    "\nWind: " + response.wind.speed + "mph" +
                    "\nHumidity: " + response.main.humidity + "%" +
                    "\nFeels like: " +response.main.feels_like + "°F";
                    
            }
            else {
                console.log("Error in network request: " + req.statusText);  
            }
        });
        req.send(null);
    });

    document.getElementById('zipSubmit').addEventListener("click", function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var zip = document.getElementById("zip");
        var countryZip = document.getElementById("countryZip");

        req.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + zip.value + ", " + countryZip.value + "&appid=" + apiKey + "&units=imperial", true);
        req.addEventListener('load', function() {
            if(req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById("weatherOutput").innerText = 
                "Temperature: " + response.main.temp + "°F" +
                "\nConditions: " + response.weather[0].description +
                "\nWind: " + response.wind.speed + "mph" +
                "\nHumidity: " + response.main.humidity + "%" +
                "\nFeels like: " +response.main.feels_like + "°F";
            }
            else {
                console.log("Error in network request: " + req.statusText);  
            }
        });
        req.send(null);
    });

    document.getElementById('postSubmit').addEventListener("click", function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var postInput = document.getElementById("postInput");

        req.open("POST", "http://httpbin.org/post", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener('load', function() {
            if(req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById("postOutput").innerText = response.data;
            }
            else {
                console.log("Error in network request: " + req.statusText);  
            }
        });
        req.send(postInput.value);
    });
}


//http://httpbin.org/post