'use strict';

require('angular');
require('angular-mocks');

describe('testing GalleryController', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have a title', () => {
    expect(this.galleryCtrl.title).toEqual('Welcome to Gallery Controller');
  });
});
