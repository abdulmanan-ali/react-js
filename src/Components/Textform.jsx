import { useState } from "react"

const Textform = (props) => {
    const [text, setText] = useState("")

    const UpperCase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const lowerCase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const clearText = () => {
        setText("")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="mb-3" style={{ margin: '12px' }}>
                    <h3>Enter your text</h3>
                    <textarea className={`form-control`} id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#33525d', color: props.mode === 'light' ? 'Black' : 'White' }}></textarea>
                    <button disabled={text.length === 0} style={{ margin: '12px' }} className="mx-3 btn btn-primary" onClick={UpperCase}>ToUpperCase</button>
                    <button disabled={text.length === 0} style={{ margin: '12px' }} className="btn btn-primary" onClick={lowerCase}>to-lower-case</button>
                    <button disabled={text.length === 0} style={{ margin: '12px' }} className="btn btn-primary" onClick={clearText}>Clear Text</button>
                </div>
                <div className="container my-3">
                    <h3>Your text summary</h3>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} <strong>words</strong> and {text.length} <strong>characters</strong> </p>
                    <h5>{0.008 * text.split(" ").length} minutes read</h5>
                </div>
            </div>
        </>
    )
}

export default Textform;