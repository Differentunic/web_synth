let voices = []
let myDiv;
let oscCount = 2;
let voiceCount = 20;
let voiceCurrent = 0;
let osc1Shape = 'sine';
let osc2Shape = 'sine';

let keyboard = new QwertyHancock({
  id: 'keyboard',
  width: parseInt(window.innerWidth),
  height: 150,
  octaves: parseInt(window.innerWidth / 300),
  startNote: 'A2',
  whiteKeyColour: 'white',
  blackKeyColour: 'black',
  activeColour: '#f36e39'
});

function setup() {
  myDiv = createDiv('click to start audio');
  myDiv.position(windowWidth / 2, windowHeight / 2);
  getAudioContext().suspend();
  // This won't play until the context has started

  for(let c=0; c<voiceCount; c++) {
    let synth = new Osc
    synth.setup();
    voices.push(synth);
  }
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
  // For each key pressed set 2 oscillators are set a frequency of pressed key
  switch (voiceCurrent) {
    case 0:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 1:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 2:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 3:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 4:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 5:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 6:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 7:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 8:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent++
      break;
    case 9:
      voices[voiceCurrent].playEnv(frequency, osc1Shape);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape);
      voiceCurrent = 0;
      break;
  }
};


