var waterBottle ={
  volume:0,
  topUp: function (){
    this.volume=100},
  drunk: function(){
    if(this.volume>=10){
    this.volume-=10}},
  emptied: function(){
    this.volume -= this.volume;
    } 
}


module.exports = waterBottle;

