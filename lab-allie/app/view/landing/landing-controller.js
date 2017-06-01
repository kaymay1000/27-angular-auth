'use strict';

require('./_signup.scss');

module.exports = ['$log',
  '$location',
  '$rootScope',
  function($log, $location, $rootScope) {
    // this.$onInit = () => {
      $log.debug('SignupController');
      
      this.title = 'Please sign in!';
      
      let url = $location.url();
      
      this.showSignup = url === '/join#signup' || url === '/join';
  // };
}];