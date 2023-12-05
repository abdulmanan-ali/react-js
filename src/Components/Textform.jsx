import { useState } from "react"

const Textform = () => {
    const [text, setText] = useState("")

    const UpperCase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const lowerCase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const permalinkFunc = () => {

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3">
                <div className="mb-3" style={{ margin: '12px' }}>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                    <button style={{ margin: '12px' }} className="mx-3 btn btn-dark" onClick={UpperCase}>ToUpperCase</button>
                    <button style={{ margin: '12px' }} className="btn btn-dark" onClick={lowerCase}>to-lower-case</button>
                    <button style={{ margin: '12px' }} className="btn btn-dark" onClick={permalinkFunc}>Permalink</button>
                </div>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} <strong>words</strong> and {text.length} <strong>characters</strong> </p>
                <h5>{0.008 * text.split(" ").length} minutes read</h5>
            </div>
        </>
    )
}

export default Textform;