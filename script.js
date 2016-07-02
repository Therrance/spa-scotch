var spaApp = angular.module('spaApp', ['ngRoute']);

spaApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });

    $locationProvider.html5Mode(true);
});


spaApp.controller('mainController', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

spaApp.controller('aboutController', function ($scope) {
    $scope.message = 'I am at About page!';
});

spaApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us!'
});