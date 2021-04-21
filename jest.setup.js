// In your own jest-setup.js (or any other name)
import "@testing-library/jest-dom";

import { SpeechRecognitionMock } from "speech-recognition-mock";

Object.defineProperty(window, "SpeechRecognition", {
  writable: true,
  value: SpeechRecognitionMock,
});
