import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topics.css'
import Qtopic from '../Qtopic/Qtopic';
import banner from '../../images/banner.png';

const Home = () => {
    const topics = useLoaderData();
    
    return (
      <div>
        <div className="container mt-3">
            <div className="banner-area">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <div className="banner">
                        <img src={banner} alt="" />
                      </div>
                       
                        
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="details">
                        <h2>"A brilliant platform for interactive engagement and learning."</h2>
                        <p>The platform has multiple options for gameplay, and a visual interface which is pleasing for the audience. The support from the team has been fantastic and has been very interested in receiving our feedback. I have tested other similar platforms and can easily and confidently state that IC Quiz is the best.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-4 topic-container'>
            {
                topics.data.map(topic => <Qtopic
                key = {topic.id}
                topic = {topic}
                ></Qtopic>)
            }
           
        </div>
        </div>
      </div>
       
    );
};

export default Home;