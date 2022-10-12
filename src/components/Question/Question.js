import React from 'react';

const Question = ({qz}) => {
    const {question,options} =qz
    let index = 1;
    return (
        <div>
            <div className="question-container">
            <div className="question-area">
           <h4>{index ++}Q. {question}</h4>
           </div>
           <div className="options">
           <p>{options}</p>
           </div>
            </div>
        </div>
    );
};

export default Question;