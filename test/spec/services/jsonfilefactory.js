'use strict';

describe('Service: jsonFileFactory', function () {

  // load the service's module
  beforeEach(module('angularSeedApp'));

  // instantiate service
  var jsonFileFactory;
  beforeEach(inject(function (_jsonFileFactory_) {
    jsonFileFactory = _jsonFileFactory_;
  }));

  it('should do something', function () {
    expect(!!jsonFileFactory).toBe(true);
  });

});
