import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Upper Case Was Clicked for - " + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case...", "success")
      
    }
    const handleLowClick =()=>{
      console.log("Lower Case Was Clicked for - " + text)
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted To Lower Case...", "success")
  }
  const handleClearClick =()=>{
    console.log("Clear text Was Clicked for - ")
    let newText = "";
    setText(newText);
    props.showAlert("Your Text Was Cleared...", "success");
}
const handleCopyClick =()=>{
  console.log("Copy Text Was Clicked...")
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied To ClipBoard...", "success");
  
}
const handleExtraSpaces =() =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Your Extra Spaces Has Been Removed...", "success");
}

    const handleOnChange =(event)=>{
        console.log("Onchange")
        setText(event.target.value);
        
    }
  

    const [text, setText] = useState(""); 
   
  return (
    <>
    <div className='container my-4' style={{color: props.mode === 'dark'?'white' : '#042743'}}>
    
        <h1 >{props.heading}</h1>
        <div className='mb-3' >
      <textarea className='form-control' value= {text} id='myBox' onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey' : 'white' , color: props.mode === 'dark'?'white' : '#042743' }} rows='8'></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white' : '#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> you will need "{0.008*text.split(" ").length}" minuites to read this</p>
    </div>
    </>

  )
}
