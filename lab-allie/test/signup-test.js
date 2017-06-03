'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing authSignupForm', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($rootScope, $componentController, $httpBackend) => {
      this.$rootScope = $rootScope;
      
      this.$httpBackend = $httpBackend;
      // go to component and create an instance for us
      this.authSignupFormCtrl = $componentController('authSignupForm');
      this.authSignupFormCtrl.$onInit();
    });
  });
  
  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation(); // need these otherwise tests fail
    this.$httpBackend.verifyNoOutstandingRequest();
  });
  afterEach(() => this.$rootScope.$apply());
  
  it('should send user data to the server', () => {
    
    let expectUrl = 'http://localhost:3000/api/signup';
    
    let expectBody = {
      username: 'allie',
      email: 'allie@allie.com',
      password: 'password',
    };
    
    let expectOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    
    this.$httpBackend.expectPOST(expectUrl, expectBody, expectOptions).respond(200, 'exampletoken1234'); 
    
    this.authSignupFormCtrl.user = {
      username: 'allie',
      email: 'allie@allie.com',
      password: 'password',
    };
    this.authSignupFormCtrl.handleSubmit();
    
    this.$httpBackend.flush();
    
    expect();
  });
  
});