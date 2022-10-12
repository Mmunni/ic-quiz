import React from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({qz}) => {
    const {question,options} =qz
    let index = 1;
    return (
        <div>
            <div className="question-container">
            <div className="question-area mb-4">
            <button className='correct-answer ms-auto'><FontAwesomeIcon icon={faEye} /></button>
           <h4>{index ++} Q. {question}</h4>
           </div>
           <div className="options">
           {
            options.map(option =>  <div className="option">
            <input type="radio" id={option} name="option" value={option}/>
            <label for={option} className='ms-2'> {options}</label>
            </div>
                )
           }
           </div>
            </div>
        </div>
    );
};

export default Question;