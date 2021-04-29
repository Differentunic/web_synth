let synths = []
let myDiv;
let oscCount = 2;

let keyboard = new QwertyHancock({
  id: 'keyboard',
  width: 1200,
  height: 150,
  octaves: 4,
  startNote: 'A2',
  whiteNotesColour: 'white',
  blackNotesColour: 'black',
  activeColour: '#f36e39'
});

function setup() {
  myDiv = createDiv('click to start audio');
  myDiv.position(0, 0);

  getAudioContext().suspend();
  // This won't play until the context has started
}

function draw() {
  // mySynth.draw();

}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    userStartAudio();
    myDiv.remove();
    console.log('Audio now enabled');
  }
  return false
}

keyboard.keyDown = function (note, frequency) {
  // For each key pressed set 2 oscillators at specified frequency
  for(let c=0; c<oscCount; c++) {
    let mySynth = new Osc(frequency)
    synths.push(mySynth)
  }
  // Start oscillators
  for(let c=0; c<oscCount; c++) {
    synths[c].setup()
    synths[c].playEnv()
  }
  console.log('Key: ', note, 'Frequency: ', frequency);

  for (let c=synths.length-1; c>=0; c--){
    synths.splice(c,1)
  }
};


