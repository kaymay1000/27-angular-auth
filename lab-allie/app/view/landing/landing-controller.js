'use strict';

require('./_landing.scss');

module.exports = ['$log',
  '$location',
  '$rootScope',
  'authService',
  function($log, $location, $rootScope, authService) {
  // this.$onInit = () => {
    $log.debug('SignupController');
    
    this.title = 'Please sign in!';
    
    let url = $location.url();
    
    this.showSignup = url === '/join#signup' || url === '/join';
    // };
  },
];