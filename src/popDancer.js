var makePopDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
   // Helloo !
  makeDancer.call(this, top, left, timeBetweenSteps)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = blinkyDancer.step;
  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
  this.$node.attr('class','popdancer')
  // return blinkyDancer;
};
makePopDancer.prototype = Object.create(makeDancer.prototype)
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.oldStep = makeDancer.prototype.step;

makePopDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('popdancer2')
  this.$node.animate({height:'100px', width:'100px'},1500)
  this.$node.animate({height:'1px', width:'1px'},1500)
}