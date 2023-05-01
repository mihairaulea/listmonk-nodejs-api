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
    instance = new Listmonk.ServerConfigData();
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

  describe('ServerConfigData', function() {
    it('should create an instance of ServerConfigData', function() {
      // uncomment below and update the code to test ServerConfigData
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be.a(Listmonk.ServerConfigData);
    });

    it('should have the property messengers (base name: "messengers")', function() {
      // uncomment below and update the code to test the property messengers
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be();
    });

    it('should have the property langs (base name: "langs")', function() {
      // uncomment below and update the code to test the property langs
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be();
    });

    it('should have the property lang (base name: "lang")', function() {
      // uncomment below and update the code to test the property lang
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be();
    });

    it('should have the property needsRestart (base name: "needs_restart")', function() {
      // uncomment below and update the code to test the property needsRestart
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Listmonk.ServerConfigData();
      //expect(instance).to.be();
    });

  });

}));