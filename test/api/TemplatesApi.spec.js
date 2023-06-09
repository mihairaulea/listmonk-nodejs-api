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
    instance = new Listmonk.TemplatesApi();
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

  describe('TemplatesApi', function() {
    describe('templatesGet', function() {
      it('should call templatesGet successfully', function(done) {
        //uncomment below and update the code to test templatesGet
        //instance.templatesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesTemplateIdDefaultPut', function() {
      it('should call templatesTemplateIdDefaultPut successfully', function(done) {
        //uncomment below and update the code to test templatesTemplateIdDefaultPut
        //instance.templatesTemplateIdDefaultPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesTemplateIdDelete', function() {
      it('should call templatesTemplateIdDelete successfully', function(done) {
        //uncomment below and update the code to test templatesTemplateIdDelete
        //instance.templatesTemplateIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesTemplateIdGet', function() {
      it('should call templatesTemplateIdGet successfully', function(done) {
        //uncomment below and update the code to test templatesTemplateIdGet
        //instance.templatesTemplateIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesTemplateIdPreviewGet', function() {
      it('should call templatesTemplateIdPreviewGet successfully', function(done) {
        //uncomment below and update the code to test templatesTemplateIdPreviewGet
        //instance.templatesTemplateIdPreviewGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
