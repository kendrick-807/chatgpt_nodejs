

// import styles from './Home.module.css';
import React, { useState, useEffect} from "react";
import axios from "axios";

import { Link, useParams } from 'react-router-dom';

import './Home.css';
var answerArr= [];
var questionArr = []

const Home = () => {
    const [question, setQuestion] = useState({});
    const handleChange = (e) => {
        e.preventDefault();

        setQuestion({
            question: e.target.value,
        });
    };
    const containerRef = React.useRef(null);

    let customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    function update(question,msg){
        let conversation = [question,msg]
        let ul = document.getElementById("list")
        let qli = document.createElement("li");
        let ali = document.createElement("li");
        let children = answerArr.length
        qli.setAttribute("id", "element"+children)
        qli.appendChild(document.createTextNode(conversation[0].question ));
        ali.setAttribute("id", "element"+children)
        ali.style.cssText = 'float: right;text-align: right;padding-top:50px;position:relative; width:90%';
        ali.appendChild(document.createTextNode(conversation[1]));
        ul.appendChild(qli)
        ul.appendChild(ali)
        for(let i=0; i < answerArr.length;i++){
            console.log(questionArr[i]);
            console.log(answerArr[i]);
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        axios
            .post(`http://localhost:8000/api/getAnswer`, question, customConfig)
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                questionArr.push(question.toString());
                answerArr.push(res.data.message);
                update(question,res.data.message);


            });
    }

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div>

            <div className="messages-container">
                <form onSubmit={submitForm} className="message-input-container">
                    <input
                        type="text"
                        placeholder="Enter a message"
                        onChange={handleChange}
                        className="message-input"
                        required
                        minLength={1}
                    />
                    <button type="submit"  className="send-message">
                        Send
                    </button>
                </form>
                <div className="message-list-container" ref={containerRef}>
                    {/*<ul className="message-list">*/}
                    {/*    {questionArr.map(item => {*/}
                    {/*        return <li key="{item}">{item}</li>;*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                    <ul className="message-list" id="list">

                        {/*{answerArr.map((item,i) => {*/}
                        {/*    return <li key={i}>{item}</li>;*/}
                        {/*})}*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;



// const Home = () => {
//     const [question, setQuestion] = useState({});
//     const array = [];
//     const handleChange = (e) => {
//         e.preventDefault();
//
//         setQuestion({
//             question: e.target.value,
//         });
//     };
//
//     let customConfig = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//
//     const submitForm = (e) => {
//         e.preventDefault();
//
//             axios
//                 .post(`http://localhost:8000/api/getAnswer`, question,customConfig)
//                 .then((res) => {
//                     console.log(res);
//                     console.log(res.data);
//                     document.getElementById("testing").innerHTML = res.data.message;
//                     array.push(res.data.message);
//                     for(let i=0; i< array.length; i++){
//                         console.log(array[i]);
//                     }
//                 });
//
//
//         };
//
//     return (
//         <div className="App">
//             <form onSubmit={submitForm}>
//                 <label>
//                     User Name:
//                     <input
//                         type="text"
//                         placeholder="Enter a message"
//                         value={value}
//                         onChange={handleChange}
//                         className="message-input"
//                         required
//                         minLength={1}
//                     />
//                 </label>
//                 <button type="submit" disabled={value < 1} className="send-message">
//                     Send
//                 </button>
//             </form>
//
//         </div>
//     );
// }
//
// export default Home;