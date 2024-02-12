"use client"
import React, { useEffect, useState } from 'react';
import { FaMicrophoneAlt } from 'react-icons/fa';


const VoiceButton = ({ inputRefs }) => {
    const [recognition, setRecognition] = useState(null);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      fillActiveInputField(transcript);
    };

    setRecognition(recognition);
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const fillActiveInputField = (text) => {
    const activeInputField = inputRefs.find((ref) => ref.current === document.activeElement);
    if (activeInputField) {
      activeInputField.current.value = text;
    }
  };

    return (
        <div className='mx-auto w-10 h-10 mt-2'>
        <button className='btn btn-circle btn-outline' onClick={toggleListening}>{listening ? (<span className="loading loading-bars loading-lg"></span>) : <FaMicrophoneAlt/>}</button>
      </div>
    );
};

export default VoiceButton;