import React from 'react'
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className="Popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>&#x2715; 
            &#x00d7; </button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;