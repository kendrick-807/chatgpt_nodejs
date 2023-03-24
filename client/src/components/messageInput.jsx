import './messageInput.css';
import React, { useState, useEffect} from "react";
import axios from "axios";

function messageInput() {
    const [question, setQuestion] = useState({});
    const array = [];
    const handleChange = (e) => {
        e.preventDefault();

        setQuestion({
            question: e.target.value,
        });
    };

    let customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        axios
            .post(`http://localhost:8000/api/getAnswer`, question,customConfig)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                document.getElementById("testing").innerHTML = res.data.message;
                array.push(res.data.message);
                for(let i=0; i< array.length; i++){
                    console.log(array[i]);
                }
            });


    };

    return (
        <form onSubmit={submitForm} className="message-input-container">
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={handleChange}
                className="message-input"
                required
                minLength={1}
            />
            <button type="submit" disabled={value < 1} className="send-message">
                Send
            </button>
        </form>
    );
}

export { messageInput };