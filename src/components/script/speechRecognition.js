const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
// const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


const words = ['ready', 'I', "am", 'not'];
const wordGrammar = '#JSGF V1.0; grammar colors; public <color> = ' + words.join(' | ') + ' ;'

// Constructor of Speech to text Api
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(wordGrammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// start speech to text recognition
const speechToText = function () {
    recognition.start();
    console.log("I am ready to recognize");
};


// recieving results to recognize
const recognizeResult = recognition.onresult = (event) => {
    console.log(event);

    let word = event.results[0][0].transcript;
    console.log("words", word);
    console.log('Confidence: ' + event.results[0][0].confidence);
    return word
}

// Recognition stop on speech end
const recognitionStop = recognition.onspeechend = function () {
    recognition.stop();
}

// If result no matches 
const noMatchesResult = recognition.onnomatch = function (event) {
    console.log(event);

    // diagnostic.textContent = 'I didn\'t recognize that color.';
}

// error displaying
const errorDisplay = recognition.onerror = function (event) {
    console.log(event);
    // diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
export { speechToText, recognizeResult, recognitionStop, noMatchesResult, errorDisplay };
