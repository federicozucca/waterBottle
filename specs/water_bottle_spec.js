var bottle = require("../water_bottle");
var assert = require("assert");

describe("Water Bottle",function(){
  it("should be empty at the start", function(){
    assert.equal(0,bottle.volume);
  })
  it("should be 100 when fill up", function(){
    bottle.topUp();
    assert.equal(100,bottle.volume);
  })
  it("should decrease by 10 when drunk", function(){
    bottle.topUp();
    bottle.drunk();
    assert.equal(90, bottle.volume);
  })
  it("should be 0 when emptied", function(){
    bottle.topUp();
    bottle.drunk();
    bottle.emptied();
    assert.equal(0, bottle.volume);
  })

})
