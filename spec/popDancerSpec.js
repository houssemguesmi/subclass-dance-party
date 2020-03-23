describe('popDancer', function() {

  var popDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new makePopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change color and size', function() {
    sinon.spy(popDancer.$node, 'toggleClass');
    sinon.spy(popDancer.$node, 'animate');
    popDancer.step();
    expect(popDancer.$node.toggleClass.called).to.be.true;
    expect(popDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(popDancer, 'step');
      expect(popDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);
      popDancer.step()

      expect(popDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });
});
