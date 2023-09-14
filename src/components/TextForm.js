import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const changeToUpperCase = () => {
    // console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text Changed to Upper Case', 'success');
  };

  const changeToLowerCase = () => {
    // console.log("Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text Changed to Lower Case', 'success');
  };

  const clearText = () => {
    // console.log("Clicked");
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copy = ()=>{
    let text = document.getElementById('text');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied To Clip Board', 'success');
  }

  const rmExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces have been removed', 'success');
  }

  const [fontSize, setfontSize] = useState(15);
  const [toggleSizeText, settoggleSizeText] = useState('Increase Text Size');


  let incFontSize = ()=>{
    if(fontSize <= 15){
        setfontSize(35);
        settoggleSizeText('Decrease Text Size')
        props.showAlert('Font Size Increased', 'success');
    }
    else{
        setfontSize(15);
        settoggleSizeText('Increase Text Size')
        props.showAlert('Font Size Decreased', 'success');
    }
  }

  return (
    <>
      <div className="container my3">
        <h1 style={{color: `${props.mode === 'dark'?'white':'black'}`}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" 
            id="text"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            style={{fontSize:`${fontSize}px`, backgroundColor:`${props.mode === 'dark'?'grey':'white'}`, color: `${props.mode === 'dark'?'white':'black'}`}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={changeToUpperCase}>
          To Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={changeToLowerCase}>
          To Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={copy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={rmExtraSpaces}>
          Remove Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={incFontSize}>
          {toggleSizeText}
        </button>
      </div>
      <div className="container my-3" style={{color: `${props.mode === 'dark'?'white':'black'}`}}>
        <h1>Text Summary</h1>
        <p className="my-3">
          Words: {text.split(" ").length} and Characters: {text.length}{" "}
        </p>
        <p className="my-3">
          {0.008 * text.split(" ").length} minutes to read.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
