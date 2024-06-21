import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import "./radar.scss";



export default function RadarStrength ({data , kind}) {
console.log(data);
console.log(kind);
data.map(element =>{
    if(typeof element.kind === 'number'){
        element.kind= kind[element.kind];
    }
})

    return (
        <div className='radar'>
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" fontSize={12} stroke='#ffffff'tickLine={false}/>
                <Radar  dataKey="value"  fill="#ff0101" fillOpacity={0.6} />
            </RadarChart>
            </ResponsiveContainer>
        </div>
);

}
