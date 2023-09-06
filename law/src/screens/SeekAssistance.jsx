import React from "react";
import "../css/seek.css";
import Meet from "./Meet";
import { useNavigate } from "react-router-dom";
export default function SeekAssistance() {
    const navigate = useNavigate()
  const handleclick = () => {
 navigate('/schedule')
  };

  return (
    <div className="card-container">
      <div class="card1" onClick={()=>{navigate('/chatbot')}}></div>
      <div class="card1" onClick={() => {navigate('/maps')}}></div>
      <div class="card1" onClick={handleclick}><p className="p">Need legal advice or guidance? Schedule a meeting with a knowledgeable lawyer on our government website today – your path to clarity and resolution starts here.</p></div>
      <div class="card1"></div>
    </div>
  );
}
