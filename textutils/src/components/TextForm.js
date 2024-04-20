import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClear = () => {
        setText('');
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCase} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCase} >Convert to LowerCase</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
            </div>
            <div className='my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
