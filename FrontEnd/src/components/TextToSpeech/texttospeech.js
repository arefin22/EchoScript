'use client'

import Speech from "react-text-to-speech";
import  { HighlightedText } from "react-text-to-speech";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdVoiceOverOff } from "react-icons/md";
import { RiVoiceprintFill } from "react-icons/ri";
const texttospeech = ({title, desc,id}) => {
    const startBtn = <button ><MdRecordVoiceOver size={26} /></button>;
    const pauseBtn = <button><RiVoiceprintFill size={26}/></button>;
    const stopBtn = <button ><MdVoiceOverOff size={26} /></button>;
  
     
    return (
        <>
        <Speech text={`${title}. ${desc}`} highlightText={true}
              id={id}
             
              pitch={0.5}
              rate={1}
              volume={1}
              voiceURI={'Microsoft Heera - English (India)'}
              startBtn={startBtn}
              pauseBtn={pauseBtn}
              stopBtn={stopBtn}
              onError={() => console.error("Browser not supported!")}
              
              />
              <HighlightedText id={id}></HighlightedText>
        {/* {news.map(({ id, title, desc }) => (
            <div key={id}>
              <h4>{title}</h4>
              <div>{desc}</div>
              <Speech text={`${title}. ${desc}`}
              pitch={0.5}
              rate={1}
              volume={1}
              voiceURI={'Google US English Female'}
              startBtn={startBtn}
              pauseBtn={pauseBtn}
              stopBtn={stopBtn}
              props={{ title: "React Text-To-Speech Component" }}
              onError={() => console.error("Browser not supported!")}
              
              />
            </div>
          ))} */}
          
        </>
    );
};

export default texttospeech;