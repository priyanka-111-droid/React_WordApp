import React,{useState} from "react";


export default function TextForm(props) {

  const handleDeleteOnClick = ()=>{
    setText("")
  }
  const handleUppercaseOnClick =()=> {
    setText(text.toUpperCase())
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
    console.log("on change triggered.")
  }
  const [text, setText] = useState("Enter text here");
  

  return (
    <>
    <div>
        <h1>Welcome to WordApp!</h1>
      <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">
          {props.heading}
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <button 
      className="btn btn-primary"
      onClick={handleUppercaseOnClick}
      >
        Convert to uppercase
      </button>

      <button 
      className="btn btn-secondary mx-4"
      onClick={handleDeleteOnClick}
      >
        Delete content
      </button>

     

    </div>

    <div className="summary my-2">
        <h2>Your text summary:</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>

    </>
  );
}
