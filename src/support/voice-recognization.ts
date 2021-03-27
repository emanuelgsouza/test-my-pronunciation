// used this example: http://viladosilicio.com.br/criando-um-aplicativo-de-transcricao-de-audio-em-texto-com-quasar-framework/

// const lastElement = elements =>

const SpeechRecognitionClass =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognitionClass();

export default class VoiceRecognition {
  async start(lang = "en-US"): Promise<string> {
    return new Promise((resolve, reject) => {
      recognition.lang = lang;
      recognition.continuous = true;
      recognition.start();

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        resolve(transcript);
      };

      recognition.onspeechend = () => {
        reject(false);
      };

      recognition.onnomatch = () => {
        reject(false);
      };
    });
  }

  stop(): void {
    recognition.stop();
  }
}
