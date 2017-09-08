var assert = require("chai").assert;
var luhnalgo = require("../lib/luhnalgo.js");

describe("Luhn algo valid", function() {
  it("Should return valid for 4518442964331", function() {
    var num = 4518442964331;
    var valid = luhnalgo(num);
    assert.isTrue(valid);
  });

  it("Should return invalid for 1234567890", function() {
    var num = 1234567890;
    var valid = luhnalgo(num);
    assert.isFalse(valid);
  });

  it("Should return invalid if a number has a non-number in it", function() {
    var num = "abcdefg12345";
    var valid = luhnalgo(num);
    assert.isFalse(valid);
  });
});