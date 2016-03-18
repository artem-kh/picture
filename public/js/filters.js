/**
 * Created by Admin on 02.03.2016.
 */
(function (angular, app) {
    'use strict';

    app.filter('countFilter', function () {
        return function (items, text) {
            if (text === undefined || text === null) {
                return items;

            } else {

                var count = text;
                var filtered = [];
                for (var i = 0; i < count; i++) {
                    if (angular.isDefined(items[i])) {
                        filtered.push(items[i]);
                    } else {
                        return filtered;
                    }
                }
                return filtered;
            }
        }
    }) .filter('pagination', function () {
        return function (items, start) {
            console.log(items);
            start = +start;
            return items.slice(start);
        }
    })

})(window.angular, window.angular.module('mainApp'));
