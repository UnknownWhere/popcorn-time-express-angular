'use strict';

var  movieServices = angular.module('movieServices', ['ngResource']);

movieServices.factory('movie', ['$resource', function($resource){
    return $resource('movies/:movieId.json', {}, {
        query: {method:'GET', params:{movieId:'movies'}, isArray:true}
    });
}]);
