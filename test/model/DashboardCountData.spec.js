/**
 * Listmonk
 * The API collection for listmonk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Listmonk);
  }
}(this, function(expect, Listmonk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Listmonk.DashboardCountData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DashboardCountData', function() {
    it('should create an instance of DashboardCountData', function() {
      // uncomment below and update the code to test DashboardCountData
      //var instance = new Listmonk.DashboardCountData();
      //expect(instance).to.be.a(Listmonk.DashboardCountData);
    });

    it('should have the property subscribers (base name: "subscribers")', function() {
      // uncomment below and update the code to test the property subscribers
      //var instance = new Listmonk.DashboardCountData();
      //expect(instance).to.be();
    });

    it('should have the property lists (base name: "lists")', function() {
      // uncomment below and update the code to test the property lists
      //var instance = new Listmonk.DashboardCountData();
      //expect(instance).to.be();
    });

    it('should have the property campaigns (base name: "campaigns")', function() {
      // uncomment below and update the code to test the property campaigns
      //var instance = new Listmonk.DashboardCountData();
      //expect(instance).to.be();
    });

    it('should have the property messages (base name: "messages")', function() {
      // uncomment below and update the code to test the property messages
      //var instance = new Listmonk.DashboardCountData();
      //expect(instance).to.be();
    });

  });

}));