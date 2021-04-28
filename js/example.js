function setup() {
  // mimics the autoplay policy
  getAudioContext().suspend();

  let mySynth = new p5.MonoSynth();

  // This won't play until the context has resumed
  mySynth.play('A6');
}
function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text(getAudioContext().state, width/2, height/2);
}
function mousePressed() {

}
