import React from 'react';
import {  useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
            <h1>quize</h1>
        </div>
    );
};

export default Quiz;