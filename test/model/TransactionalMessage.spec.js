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
    instance = new Listmonk.TransactionalMessage();
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

  describe('TransactionalMessage', function() {
    it('should create an instance of TransactionalMessage', function() {
      // uncomment below and update the code to test TransactionalMessage
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be.a(Listmonk.TransactionalMessage);
    });

    it('should have the property subscriberEmail (base name: "subscriber_email")', function() {
      // uncomment below and update the code to test the property subscriberEmail
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be();
    });

    it('should have the property subscriberId (base name: "subscriber_id")', function() {
      // uncomment below and update the code to test the property subscriberId
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "template_id")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be();
    });

    it('should have the property fromEmail (base name: "from_email")', function() {
      // uncomment below and update the code to test the property fromEmail
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new Listmonk.TransactionalMessage();
      //expect(instance).to.be();
    });

  });

}));