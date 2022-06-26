<template>
  <button @click="startRecognition">Start</button>
  <button @click="abortRecognition">Abort</button>

</template>

<script>

import {speechToText, recognizeResult} from '@/components/script/speechRecognition.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    async startRecognition() {
      await speechToText();
      console.log("final result", recognizeResult());
    },
  },
}
</script>
