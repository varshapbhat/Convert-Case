import React, { useState } from "react";
import "./style1.css";



export default function TextForm(props) {
  let newText;
  const handleUpClick = () => {
    // console.log("button was clicked");
    newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("button was clicked");
    setText(event.target.value);
  };

  const handleUpClick2 = () => {
    // console.log("butten was clicked" );
    // setText(text.toLocaleLowerCase() );
    newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const [text, setText] =
    useState("Enter Text Here"); /* if we want to change text then,  
    setText("new text");
   */
    const handleCapClick2 = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
console.log(str2);
setText(str2); }

const handleTogClick2 = ()=> {
    function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
    
}
function isUpperCase(str)
{
    return str === str.toUpperCase() && str !== str.toLowerCase();
}
   
    
    const arr = text.split("");

    for (var i = 0; i < arr.length; i++) {
        console.log(arr);
        if(isLowerCase(arr[i])){
            arr[i] = arr[i].charAt(0).toUpperCase();
        }
        else if(isUpperCase(arr[i]))
        {
            arr[i] = arr[i].charAt(0).toLowerCase() ;
        }
        else{
            arr[i]=arr[i];
        }
       
    
    }
    const str2 = arr.join("");
console.log(str2);
setText(str2);
   
   
    
}
const handleTogClick3 = () => {
    const arr = text.split(".");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(".");
console.log(str2);
setText(str2);
}

    
    

  return (
    <div>
      <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div>
        <button className="btn1 mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn2 mx-2" onClick={handleUpClick2}>
          Convert to Lower case
        </button>
        <button className="btn3 mx-2" onClick={handleCapClick2} >Capitalize the words</button>
        <button className="btn4 mx-2" onClick={handleTogClick2}>Toggle case</button>
        <button className="btn5 mx-2" onClick={handleTogClick3}>Sentence Case</button>
        
      </div>
      <div>
        <br />
        <h5>Text Summary</h5>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
      </div>

      <div>
        <br />
        <h3>Preview</h3>
        <textarea
          className="form-control my-1"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
        ></textarea>
        {/* <p>{text}</p> */}

        
        
      </div>
    </div>
  );
}
