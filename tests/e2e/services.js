'use strict';

var request = require('supertest'),
    app = require('../../app'),
    chai = require('chai'),
    expect = chai.expect;


describe('It should pass the json api', function() {
    it('should pass the index', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.length).to.equal(200);
                done();
            });
    });
});