import React from "react";
// import { Button } from "react-bootstrap";

export default function TextForm(props) {
  const [text, setText] = React.useState("");

  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handelOnChange = (e) => {
    // console.log('On change');
    setText(e.target.value);
  };

  const handleCopy = (e) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleCamelCase = (e) => {
    var text = document.getElementById("myBox");
    var newText = text.value;
    setText(newText.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));
    props.showAlert("Converted to camelcase", "success");
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="myBox"
            rows={8}
            style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCamelCase}>Camalize</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here..."}</p>
      </div>

    </>
  );
}
