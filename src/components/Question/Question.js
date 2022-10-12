import React from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({qz, qzNo}) => {
    const {question,options, correctAnswer} =qz
    const correctAnswerHandeler = (correctAnswer) => {
        toast(`Correct Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const quizOptionHandeler = (option) => {
        if(option === correctAnswer) {
            toast.success('your answer is correct', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
           toast.error('your answer is wrong', {
               position: toast.POSITION.TOP_CENTER
           });
        }
    }
    return (
        <div>
            <div className="question-container">
            <div className="question-area mb-4">
            <button onClick={() => correctAnswerHandeler(correctAnswer)} className='correct-answer ms-auto'><FontAwesomeIcon icon={faEye} /></button>
            <ToastContainer></ToastContainer>
           <h4> Q. {qzNo} {question}</h4>
           </div>
           <div className="options">
           {
            options.map((option) =>  <div onClick={() => quizOptionHandeler(option)} className="option">
            <input type="radio" id={option} name="option" />
            <label for={option} className='ms-2'>{option}</label>
            <ToastContainer></ToastContainer>
            </div>
                )
           }
           </div>
            </div>
        </div>
    );
};

export default Question;