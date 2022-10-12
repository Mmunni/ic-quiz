import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
           <div className="container mt-5">
           <div className="quiz-area">
           <h2>Quiz of: {quiz.data.name}</h2>
            <h2>quize {quiz.data.questions[2].question}</h2>
            <h2>quize {quiz.data.questions[2].options}</h2>
           
           </div>
           </div>
        </div>
    );
};

export default Quiz;