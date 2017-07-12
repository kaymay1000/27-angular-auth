'use strict'

// require('./_signup.scss')

module.exports = [
  '$log',
  '$location',
  '$rootScope',
  function($log, $location, $rootScope) {
    $log.debug('LandingController')
    let url = $location.url()
    this.showSignup = url === '/join/#signup'|| url === '/join'
    this.title = 'Sign up for the app here!'
  }]
