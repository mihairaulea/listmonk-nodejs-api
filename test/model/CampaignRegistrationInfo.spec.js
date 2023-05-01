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
    instance = new Listmonk.CampaignRegistrationInfo();
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

  describe('CampaignRegistrationInfo', function() {
    it('should create an instance of CampaignRegistrationInfo', function() {
      // uncomment below and update the code to test CampaignRegistrationInfo
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be.a(Listmonk.CampaignRegistrationInfo);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property lists (base name: "lists")', function() {
      // uncomment below and update the code to test the property lists
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property fromEmail (base name: "from_email")', function() {
      // uncomment below and update the code to test the property fromEmail
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "content-type")', function() {
      // uncomment below and update the code to test the property contentType
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property altbody (base name: "altbody")', function() {
      // uncomment below and update the code to test the property altbody
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property sendAt (base name: "send_at")', function() {
      // uncomment below and update the code to test the property sendAt
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property messenger (base name: "messenger")', function() {
      // uncomment below and update the code to test the property messenger
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "template_id")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new Listmonk.CampaignRegistrationInfo();
      //expect(instance).to.be();
    });

  });

}));
