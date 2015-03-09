//inside the square brackets is the 'dependency injection'
angular.module('rainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<h1>Hi...welcome home friends</h1>'
        })
    })