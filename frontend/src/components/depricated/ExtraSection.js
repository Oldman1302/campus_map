import Button from "./Button/Button";
import {useState} from "react";

function StateVsRef() {
    const [value, setValue] = useState("");

    return (
        <div>
            <h3>Input value: {value}</h3>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                className="control"
            />
        </div>
    )
}

export default function ExtraSection() {
    const [name, setName] = useState('');
    const [hasError, setHasError] = useState(false);
    const [reason, setReason] = useState("offer");

    function handleNameChange(event) {
        setName(event.target.value);
        setHasError(event.target.value.trim().length === 0);
    }

    return (
        <section>
            <h3>Extra information</h3>
            <form>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    className="control"
                    value={name}
                    placeholder="Write down something"
                    onChange={e => handleNameChange(e)}
                    style={{
                        border: hasError ? "1px solid red" : null,
                    }}
                />

                <label htmlFor="name">Reason</label>
                <select id="reason" className="control" value={reason} onChange={e => setReason(e.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="offer">Offer</option>
                </select>

                <Button disabled={hasError}>Confirm</Button>
            </form>
            <StateVsRef />
        </section>
    )
}