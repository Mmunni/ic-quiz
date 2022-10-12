
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

     const [total, setTotal] = useState([])
     useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => {
            const totalLoaded = data.data;
            const totalData = totalLoaded.map(card => {
                const singleCard = {
                    name: card.name,
                    total: card.total
                }
                return singleCard
            })
            console.log(totalData)
            setTotal(totalData);
        })
     }, [])
    return (
        <div>
             <div className="container mt-5">
             <div className="row">
                <div className="col  me-auto">
                <ResponsiveContainer width="100%" height={400}>
                <BarChart  width={300} height={400} data={total}>
                    <Bar dataKey="total" fill=" #c0392b" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey="total"></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
                </ResponsiveContainer>
                </div>
             </div>
             </div>
            
        </div>
    );
};

export default Statistics;