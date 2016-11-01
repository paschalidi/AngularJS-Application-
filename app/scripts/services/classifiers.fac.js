(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('classifiersFactory', function($http) {
            return {
                get: function() {
                    return $http.get("/datasets/file.json");
                }
            };
        })
})();