(function () {

    var app = angular.module('timeApp', []);
    app.controller('TimeController', function ($http) {

        var time = this;

        time.timings = [];

        $http.get('timings.json').success(function (data) {

            time.timings = data;
        });
    });
})();