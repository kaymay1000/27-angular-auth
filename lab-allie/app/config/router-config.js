'use strict';

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.when('', '/join#signup'); from lecture
    $urlRouterProvider.when('', '/home'); // from demo code
    $urlRouterProvider.when('/', '/join#signup');
    $urlRouterProvider.when('/signup', '/join#signup');
    $urlRouterProvider.when('/login', '/join#login');
    
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
      },
      {
        name: 'landing',
        url: '/join',
        template: require('../view/landing/landing.html'),
        controller: 'LandingController',
        controllerAs: 'landingCtrl',
      },
      // {
      //   name: 'login',
      //   url: '/login',
      //   template: require('../component/landing/login/login.html'),
      //   controller: 'LoginController',
      //   controllerAs: 'loginCtrl',
      // },
      // {
      //   name: 'signup',
      //   url: '/signup',
      //   template: require('../component/landing/signup/signup.html'),
      //   controller: 'SignupController',
      //   controllerAs: 'signupCtrl',
      // },
      // {
      //   name: 'gallery',
      //   url: '/gallery',
      //   template: require('../view/gallery/gallery.html'),
      //   controller: 'GalleryController',
      //   controllerAs: 'galleryCtrl',
      // },
    ];
    routes.forEach(route => $stateProvider.state(route));
  },
];