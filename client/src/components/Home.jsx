import React, { useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";

import { Link, useParams } from 'react-router-dom';

import './Home.css';
var answerArr= [];
var questionArr = []


const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

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

    async function update(question,msg){
        let conversation = [question,msg]
        let ul = document.getElementById("list")
        let qli = document.createElement("li");
        let ali = document.createElement("li");
        let qinfo = document.createElement("span");
        let ainfo = document.createElement("span");
        let thinking = document.createElement("span");



        let children = answerArr.length
        qli.setAttribute("id", "element"+children)
        qli.appendChild(document.createTextNode(conversation[0].question ));
        qli.style.cssText = 'border: 1px solid #dfd087;\n'+
            'background-color: #f8e896;\n' +
            '    border: 1px solid #dfd087;\n' +
            '    border-radius: 10px;\n' +
            '    margin-bottom: 10px;\n' +
            '    padding: 10px;\n' +
            '    text-align: right;margin-left: auto;margin-right: 10px;';

        ali.setAttribute("id", "element"+children)
        ali.style.cssText =
            'margin-left: -30px; \n' +
            '    margin-bottom: 10px;\n' +
            '    padding: 10px;\n' +
            '    background-color: #A8DDFD;\n' +
            '    text-align: left;\n' +
            '    border: 1px solid #97C6E3;\n' +
            '    border-radius: 10px;\n' +
            '    max-width:70%;';
        ali.appendChild(document.createTextNode(conversation[1] ));
        qinfo.appendChild(document.createTextNode(moment().format('LTS')  + " (You)") )
        ul.appendChild(qinfo);
        ul.appendChild(qli)
        thinking.appendChild((document.createTextNode("AI is thinking...")))
        ul.appendChild(thinking);
        await delay(2000);
        ainfo.appendChild(document.createTextNode(moment().format('LTS') ) );
        ul.appendChild(ainfo);
        ul.appendChild(ali)
        ul.removeChild(thinking);
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

                    <ul className="message-list" id="list">

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;


