import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topics.css'
import Qtopic from '../Qtopic/Qtopic';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div className="container">
             <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-4 topic-container'>
            {
                topics.data.map(topic => <Qtopic
                key = {topic.id}
                topic = {topic}
                ></Qtopic>)
            }
           
        </div>
        </div>
       
    );
};

export default Home;