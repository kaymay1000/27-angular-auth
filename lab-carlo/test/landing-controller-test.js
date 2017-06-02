'use strict';

require('angular');
require('angular-mocks');

describe('testing LandingController', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('LandingController');
      this.homeCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have a title', () => {
    expect(this.homeCtrl.title).toEqual('Welcome to Landing Controller');
  });
});
