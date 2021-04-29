class Osc {
  attackLevel = 1.0;
  releaseLevel = 0;

  attackTime = 0.001;
  decayTime = 0.2;
  susPercent = 0.2;
  releaseTime = 0.5;

  env;
  osc;

  constructor(freq) {
    this.freq = freq
  }

  setup() {
    this.env = new p5.Envelope();
    this.osc = new p5.Oscillator('triangle');
    this.osc.amp(this.env);
    this.osc.freq(this.freq);
    this.osc.start();
  }

  draw() {
    background(220);
    text('tap here to play', 5, 20);
    this.attackTime = map(mouseX, 0, width, 0, 1.0);
    this.attackLevel = map(mouseY, height, 0, 0, 1.0);
    text('attack time: ' + this.attackTime, 5, height - 40);
    text('attack level: ' + this.attackLevel, 5, height - 20);
  }

  playEnv() {
    // ensure that audio is enabled
    this.osc.stop();
    this.osc.freq(this.freq);
    console.log("freq: ", this.freq)
    this.osc.start();

    this.env.setADSR(this.attackTime, this.decayTime, this.susPercent, this.releaseTime);
    this.env.setRange(this.attackLevel, this.releaseLevel);
    this.env.play();
  }
}
