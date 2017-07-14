'use strict'

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: ['$log', '$location', 'authService', SignupController]
}

function SignupController($log, $location, authService) {
  $log.debug('#signupCtrl')

  authService.getToken()
  .then(() => $location.url('/home'))

  this.signup = function(user) {
    $log.debug('#signupCtrl.signup')

    authService.signup(user)
    .then(() => $location.url('/home'))
  }
}
