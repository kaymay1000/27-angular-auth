'use strict';

module.exports = [
  '$log',
  '$location',
  '$rootScope',

  function($log, $location, $rootScope) {
    $log.debug('LandingContoller');

    let url = $location.url();

    this.showSignup = url === '/join#signup' || url === '/join';
  },
];
