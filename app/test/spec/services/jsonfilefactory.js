'use strict';

describe('Service: jsonFileFactory', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var jsonFileFactory;
  beforeEach(inject(function (_jsonFileFactory_) {
    jsonFileFactory = _jsonFileFactory_;
  }));

  it('should do something', function () {
    expect(!!jsonFileFactory).toBe(true);
  });

});
