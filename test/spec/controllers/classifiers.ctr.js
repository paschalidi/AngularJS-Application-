'use strict';

describe('Controller: ClassifiersCtrCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSeedApp'));

  var ClassifiersCtrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassifiersCtrCtrl = $controller('ClassifiersCtrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassifiersCtrCtrl.awesomeThings.length).toBe(3);
  });
});
