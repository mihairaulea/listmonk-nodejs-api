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
    instance = new Listmonk.ListRegistrationInfo();
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

  describe('ListRegistrationInfo', function() {
    it('should create an instance of ListRegistrationInfo', function() {
      // uncomment below and update the code to test ListRegistrationInfo
      //var instance = new Listmonk.ListRegistrationInfo();
      //expect(instance).to.be.a(Listmonk.ListRegistrationInfo);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Listmonk.ListRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Listmonk.ListRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property optin (base name: "optin")', function() {
      // uncomment below and update the code to test the property optin
      //var instance = new Listmonk.ListRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new Listmonk.ListRegistrationInfo();
      //expect(instance).to.be();
    });

  });

}));
