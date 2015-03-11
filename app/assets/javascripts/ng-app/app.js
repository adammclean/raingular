//inside the square brackets is the 'dependency injection'
angular.module('rainApp', ['ui.router','templates'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
    })

