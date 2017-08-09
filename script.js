jQuery(document).ready(function ($) {
    $("#search").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#button").click();
        }
    })
});
var getWeather = function () {
    jQuery(document).ready(function zipcodeGet() {
        var queryString = $('#search').val();
        var forecastUrl = 'http://api.wunderground.com/api/127fe8e376eda81b/forecast/q/' + queryString + '.json';
        $.get(forecastUrl, forecastDays);
        return false;
    });
    jQuery(document).ready(function conditionssubmit() {
        var queryString = $('#search').val();
        var urlc = "https://api.wunderground.com/api/127fe8e376eda81b/conditions/q/" + queryString + ".json";
        $.get(urlc, conditions);
        return false;
    });

    function conditions(data) {
        $('#city').empty();
        var city = data.current_observation.display_location.full;
        $('#city').append('<h2>' + 'Weather forecast in ' + city + '</h2>');
        $('#city').addClass('headings-style');
    }

    function forecastDays(info) {
        var locationOne = info.forecast.simpleforecast.forecastday;
        for (var i = 0; i < locationOne.length; i++) {
            var days = "day" + (i + 1);
            var high = locationOne[i].high.celsius;
            var low = locationOne[i].low.celsius;
            var wicon = locationOne[i].icon_url;
            var precip = locationOne[i].qpf_allday.in;
            var day = locationOne[i].date.weekday;
            $("#temp_" + days).html('<p>' + 'High: ' + high + '&deg;C' + '<br>' + ' Low: ' + low + '&deg;C' + '</p>');
            $("#wicon_" + days).html('<img class="weathericon" src=' + wicon + '>');
            $("#precip_" + days).html('<p>' + 'Precip: ' + precip + '"' + '</p>');
            $("#day_" + days).html('<p>' + day + '</p>');
            $('.weather').addClass("weather-style");
        };
    };
}
