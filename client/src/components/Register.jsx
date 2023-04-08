import moment from "moment/moment";
import axios from "axios";
import './Register.css';
import React, {useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import {Button} from "react-bootstrap";
const Register = () => {
    const [user, setUser] = useState({});
    const [password, setPassword] = useState({});
    const handleChange = (e) => {
        e.preventDefault();

        setUser({
            input: e.target.value,
        });

    };

    const handlePasswordChange = (e) => {
        e.preventDefault();

        setPassword({
            password: e.target.value,
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
            .post(`http://localhost:8000/register`, [user, password] ,customConfig)
            .then((res) => {
                console.log(res.data);
                // questionArr.push(question.toString());
                // answerArr.push(res.data.message);
                // update(question,res.data.message);


            });
    }

    return (
        <div>
            <form className={"form-container"} onSubmit={submitForm}>
                <h2>Create an account</h2>
                <input label='Your Name' size='lg' id='form1' type='text' placeholder="Create your username" onChange={handleChange}></input>
                <input label='Your Name' size='lg' id='form2' type="password" placeholder="Create your password" onChange={handlePasswordChange} minLength="4" required></input>
                <button type="submit" className={"register-button"}>Register</button>
            </form>
        </div>





    );
}


export default Register;
