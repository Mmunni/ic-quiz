import React from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({qz, qzNo}) => {
    const {question,options, correctAnswer} =qz
    const correctAnswerHandeler = (correctAnswer) => {
        toast(`Correct Answer is: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const quizOptionHandeler = (option) => {
        if(option === correctAnswer) {
            toast.success('Your Answer is Correct', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
           toast.error('Your Answer is Wrong', {
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
           <h4> Q. {qzNo} {question.slice(3,-4)}</h4>
           </div>
           <div className="options">
           {
            options.map((option) =>  <div  className="option">
            <input onClick={() => quizOptionHandeler(option)} type="radio" id={option} name="option" />
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