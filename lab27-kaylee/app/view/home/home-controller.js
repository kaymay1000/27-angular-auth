'use strict'

// require('./_home.scss')

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('#HomeController')
    this.title = 'Welcome to the Home Page!'
  }
}]
