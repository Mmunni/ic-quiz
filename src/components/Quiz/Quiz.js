import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
           <div className="container mt-5">
           <div className="quiz-area">
           <h2 className='mb-5'>Quiz of: {quiz.data.name}</h2>
           <div className="single-quiz">
            {
                quiz.data.questions.map((qz, index) => <Question 
                    key={qz.id}
                    qzNo = {index + 1}
                    qz={qz}
                    ></Question>)
            }
            
           </div>
            
           
           </div>
           </div>
        </div>
    );
};

export default Quiz;