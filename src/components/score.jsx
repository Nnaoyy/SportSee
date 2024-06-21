import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import "./score.scss";


const COLORS = ['#ff0000', '#fff'];

export default function Score ({user}) {

    const userScore = (user.score?user.score: user.todayScore)*100;
    const data = [
        { value: userScore },
        { value: 100 - userScore },
      
      ];

    return (
        <div className='score'>
            <h2 className='score_title'>Score</h2>
            <PieChart width={258} height={263} >
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                startAngle={200}
                endAngle={-160}
                cornerRadius={10}
                
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            </PieChart>
            <p className='objectif'> <span>{userScore}%</span><br/> de votre objectif</p>
        </div>
    );
  
}
