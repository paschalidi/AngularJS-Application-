'use strict';

describe('Service: classifiers.fac', function () {

  // load the service's module
  beforeEach(module('angularSeedApp'));

  // instantiate service
  var classifiers.fac;
  beforeEach(inject(function (_classifiers.fac_) {
    classifiers.fac = _classifiers.fac_;
  }));

  it('should do something', function () {
    expect(!!classifiers.fac).toBe(true);
  });

});
