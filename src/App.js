import logo from './logo.svg';
import './App.css';
import SpeechRecognition from 'react-speech-recognition';
import { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';//usestate

function App() {

  const [textcopied, settextcopied] = useState();
  const [isCopied, setCopied] = useClipboard(textcopied);
  const startlisting = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const stoplisting = () => SpeechRecognition.stopListening()
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const funcsettextcopied = () => {
    settextcopied(transcript)
  };
  return (
    <>
      <div className='container'>
        <div className='heading_area'>
          <h1>Speech to Text Converter</h1>
        </div>

        <div className='text_area' onClick={funcsettextcopied}>{transcript}</div>
        <div className='btn'>
          <button className='button' onClick={setCopied}>was copied ?{isCopied ? "yes" : "nope"}</button>
          <button className='button' onClick={startlisting}>start listening</button>
          <button className='button' onClick={stoplisting}>stop listing</button>
        </div>

      </div>


    </>
  );
}

export default App;
