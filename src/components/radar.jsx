import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import "./radar.scss";

const data= [
    {
        value: 80,
        kind: 'cardio'
    },
    {
        value: 120,
        kind: 'energy'
    },
    {
        value: 140,
        kind: 'endurance'
    },
    {
        value: 50,
        kind: 'strength'
    },
    {
        value: 200,
        kind: 'speed'
    },
    {
        value: 90,
        kind: 'intensity'
    }
];

export default function RadarStrength () {



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
