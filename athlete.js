var waterBottle = require("./water_bottle");
var athlete = {
  hydration:100,
  distance: 0,
  run: function(metres){
    if(this.hydration>0){
    this.distance += metres;
    this.hydration -= metres/100;
  }
},
drink: function(){
  this.hydration+=10
}


}


module.exports = athlete;



// Athlete should be able to run: increasing distance, decreasing hydration.
// Athlete should not move when running dehydrated: hydration at 0;
// Athlete should be able to increase hydration by drinking from water bottle