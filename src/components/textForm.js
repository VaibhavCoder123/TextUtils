import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text changed to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text changed to lowercase", "success");
  };

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text coppied", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#191818",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } type="submit mx-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } type="submit mx-1`}
          onClick={handleLoClick}
        >
          Convert to Lower Case
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } type="submit mx-1`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } type="submit mx-1`}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } type="submit mx-1`}
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summry</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to Preview it here"}
        </p>
      </div>
    </>
  );
}
