'use strict'

const angular = require('angular')
require('angular-mocks')
const galleryCtrlr = require('../app/view/signup/signup-controller')

describe('testing SignupController', function(){
  beforeEach(() => {
    angular.mock.module('routesApp')
    angular.mock.inject(($controller))
  })
})
