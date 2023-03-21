
import { Link } from "react-router-dom";
// import styles from './Home.module.css';
import React, { useState, useEffect } from "react";

function handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
}

function handleSubmit(e) {
    alert('A form was submitted: ' + this.state);

    fetch('http://localhost:3000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
    }).then(function(response) {
        console.log(response)
        return response.json();
    });

    e.preventDefault();
}

const Home = () => {
  //   const [message, setMessage] = useState("");
  //
  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //       .then((res) => res.json())
  //       .then((data) => setMessage(data.message));
  // }, []);

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} name="name" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;