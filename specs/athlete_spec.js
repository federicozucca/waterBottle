var athlete = require("../athlete");
var assert = require("assert");

describe("Athlete",function(){
  it("should start hydration at 100", function(){
    assert.equal(100,athlete.hydration);
  })
  
  it("should start distance at 0", function(){
    assert.equal(0,athlete.distance);
  })
  
  it("should run and increase distance and decrease hydration", function(){
    athlete.run(100);
    assert.equal(100,athlete.distance);
    assert.equal(99,athlete.hydration);
  });
  
  it("should drink increase hydration by 10", function(){
    athlete.run(1000);
    athlete.drink();
    assert.equal(99,athlete.hydration);
  })

})