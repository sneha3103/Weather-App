var UserSearch = require("./UserSearch.js");
var moment = require("moment");

function WeatherAdmin () {
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function
        (error,data) {
            console.log(data);
        });
    };
    this.newUserSearch = function(name,location) {
        var nUser = new UserSearch(name, location);
        
        // nUser.getWeather();
        var logTxt = "\nName: " + nUser.name + 
        " Location: " + nUser.location + 
        " Date: " + moment(nUser.date).format("MM-DD-YYYY");

        fs.appendFile("log.txt", logTxt, function(err) {
            if(err) throw err;
        });

        nUser.getWeather();

        console.log(nUser.date);
    };
};

module.exports = WeatherAdmin;

// var testAdmin = new WeatherAdmin();
// testAdmin.newUserSearch("Addis", "Austin");