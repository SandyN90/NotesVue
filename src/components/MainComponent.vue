<template>
  <div class="text-lg">
    <p>{{words.join(' ')}}</p>
  </div>
  <button class="border border-transparent mr-4 bg-slate-200 rounded-md px-4 py-2" @click="startRecognition">Start</button>
  <button class="border border-transparent mr-4 bg-slate-200 rounded-md px-4 py-2" @click="abortRecognition">Abort</button>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      words: [],
    };
  },
  methods: {
    startRecognition() {
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
      recognition.start();
      console.log("I am ready to recognize");

      // recieving results to recognize
      recognition.onresult = (event) => {
        let word = event.results[0][0].transcript;
        this.words.push(word);
        
        console.log('Confidence: ' + event.results[0][0].confidence);
        // return word
      }

      // Recognition stop on speech end
      recognition.onspeechend = function () {
        recognition.stop();
      }

      // If result no matches 
      recognition.onnomatch = function (event) {
        console.log(event);

      // diagnostic.textContent = 'I didn\'t recognize that color.';
      }

      // error displaying
      recognition.onerror = function (event) {
        console.log(event);
        // diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
      }
    },
  },
}
</script>
