"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
chai_1.should();
describe.only('My First Test Suite', function () {
    it('should allow doing assertions', function () {
        expect(true).to.equal(true);
    });
    it('should also support the "should" syntax', function () {
        var b = true;
        b.should.be.a('boolean');
        b.should.equal(true);
    });
});
