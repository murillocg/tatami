'use strict';

tatamiJHipsterApp
    .factory('AuditsService', function ($http) {
        return {
            findAll: function () {
                return $http.get('tatami/audits/').then(function (response) {
                    return response.data;
                });
            },
            findByDates: function (fromDate, toDate) {

                var formatDate =  function (dateToFormat) {
                    if (dateToFormat !== undefined && !angular.isString(dateToFormat)) {
                        return dateToFormat.getYear() + '-' + dateToFormat.getMonth() + '-' + dateToFormat.getDay();
                    }
                    return dateToFormat;
                };

                return $http.get('tatami/audits/', {params: {fromDate: formatDate(fromDate), toDate: formatDate(toDate)}}).then(function (response) {
                    return response.data;
                });
            }
        };
    });
