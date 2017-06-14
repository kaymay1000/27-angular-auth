'use strict'

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig]

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/join#signup')
  $urlRouterProvider.when('/signup', '/join#signup')
  $urlRouterProvider.when('/login', '/join#login')
  $urlRouterProvider.when('', '/home')

  var routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    }
    // {
    //   name: 'login',
    //   url: '/login',
    //   template: require('../component/landing/login/login.html'),
    //   controller: 'LoginController',
    //   controllerAs: 'loginCtrl'
    // }
  ]

    routes.forEach(route => $stateProvider.state(route))
  }
