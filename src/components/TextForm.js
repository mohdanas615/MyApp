import React, {useState} from 'react'

export default function Textforms(props) {
  
    const handleUpClick=()=>{
       //console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","Success");
    }
    const handleLoClick=()=>{
       //console.log("Uppercase was clicked"+text)
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","Success");
    }
    const handleOnChange=(event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }
    const handleClearClick=()=>{
      setText("");
      props.showAlert("Text Cleared","Success");
    }
    const handleCopy=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","Success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(' ')) ;
      props.showAlert("Extra Spaces Removed","Success");
    }
    const handleTextAnalyze=()=>{
      const obj={}
      for(let x of text){
        if(obj[x])
            obj[x]+=1;
        else
            obj[x]=1; 
    }
   console.log(obj);
   text.length===0 ? props.showAlert("Type something to Analyze","Warning"): props.showAlert("Text Analyzed","Success")
    }
    
    const[text, setText]=useState('');
   //setText("Write here");
  return (
    <>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
  <div>
     <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#495057':'white', color:props.mode==='dark'? 'white':'black'}}id="myBox" rows="7"></textarea>
  </div>
  <div className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</div>
  <div className="btn btn-primary mx=0"onClick={handleLoClick}>Convert to Lowercase</div>
  <div className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</div>
  <div className="btn btn-primary mx-0"onClick={handleExtraSpaces}>Remove Extra Spaces</div>
  <div className="btn btn-primary mx-1"onClick={handleClearClick}>Clear</div>
  <div className="btn btn-primary mx-1"onClick={handleTextAnalyze}>Analyze Text</div>
    </div>
  </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary here</h1>
      <p>{text.length<=1 ? 0:text.split(" ").length} words and {text.length} characters</p>
      <p>{text.length===0 ? 0:0.008*text.split(" ").length}  minutes to read the text</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:'Enter something in the textbox to preview it here'}</p>
     
    </div>
    </>
  )
}
