var weather = require("weather-js");

function UserSearch(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.getWeather = function () {
        weather.find({
            search: this.location, degreeType: "F"
        },
            function (err, result) {
                if (err) console.log(err);

                console.log(JSON.stringify(result, null, 2));
            }
        )
        console.log("getting weather");
    }
}

module.exports = UserSearch;