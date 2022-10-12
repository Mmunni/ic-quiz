import React from 'react';
import './Qtopic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';
const Qtopic = ({topic}) => {
    const{logo, name, id} = topic
    return (
        <div className='col'>
            <div className="single-topic">
            <img src={topic.logo} alt="" />
            <h3>{topic.name}</h3>
           <Link to ={`/topics/${id}`}> <button className='topic-btn'>Start Practice <FontAwesomeIcon icon={faArrowRight} /></button> </Link> 
            </div>
        </div>
    );
};

export default Qtopic;