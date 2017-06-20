/**
 * Created by mike on 6/20/17.
 */
'use strict';
var workout = require("../lib/parser");

describe('workout parser', function () {
    it('should parse a simple exercise as a part of a set', function (done) {
        let set = "squat"
        workout.parseSet(set).exercise.should.equal('squat')
        done();
    });
});