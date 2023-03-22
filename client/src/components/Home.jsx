
import { Link } from "react-router-dom";
// import styles from './Home.module.css';
import React, { useState, useEffect} from "react";
import axios from "axios";





const Home = () => {
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
        <div className="App">
            <form onSubmit={submitForm}>
                <label>
                    User Name:
                    <input type="text" name="question" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
            <h1 id="testing"></h1>
            <ol>
                {array.map((array) => (
                    <li>{array}</li>
                ))}
            </ol>
        </div>
    );
}

export default Home;