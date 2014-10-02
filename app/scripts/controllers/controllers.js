'use strict';

var movieApp = angular.module('movieApp', ['xeditable', 'ngMockE2E']);

movieApp.factory('socialService', function() {
    return {
        twitter: 'twitter'
    }
});

movieApp.factory('userRepository', function() {

    var username = 'John Doe';

    return {
        getUsername: function() {
            return username;
        }
    }
});

movieApp.controller('MainController', function($scope){

    $scope.appName = 'Popcorn Time';

    $scope.sMovies = true;
    $scope.sAdmin = false;

    $scope.showMovies = function() {
        $scope.sMovies = true;
        $scope.sAdmin = false;
    };

    $scope.showAdmin = function() {
        $scope.sMovies = false;
        $scope.sAdmin = true;
    };
});

movieApp.controller('MovieController', function($scope, $http) {

    $scope.loadMovies = function() {
        return $http.get("/movies").success(function(response){
            $scope.movies = response;
        });
    };
});

movieApp.controller('SocialController', function($scope, socialService, userRepository) {
    $scope.social = socialService.twitter;

    $scope.username = userRepository.getUsername();

});


// --------------- mock $http requests ----------------------
movieApp.run(function($httpBackend) {
    $httpBackend.whenGET('/movies').respond([
        {id: 1, title: "Commando", actors: "Arnold Schwarzenegger, Rae Dawn Chong", director: "Mark L. Lester", year: 1985},
        {id: 2, title: "Raw Deal", actors: "Arnold Schwarzenegger, Kathryn Harrold, Darren McGavin", director: "John Irvin", year: 1986},
        {id: 3, title: "Predator", actors: "Arnold Schwarzenegger, Carl Weathers, Bill Duke", director: "John McTiernan", year: 1987}
    ])
});
