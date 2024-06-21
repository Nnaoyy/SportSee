import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

import "./session.scss";

const dayAbbreviations = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const CustomTooltip = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}min`}</p>
			</div>
		)
	}

	return null
}


export default function Session ({sessionData}) {

    const dayFormatter = (tick) => {
        return dayAbbreviations[tick - 1];
    };
  
    const CustomizedCursor = ({ points }) => {
        return <Rectangle fill="#000000" opacity={0.1} x={points[0].x} width={258} height={263} />
    }

    return (
    <div className='session'>
        <h2 className="session_title">Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={sessionData}
            margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
            }}
            >
                <Line type="natural" animationEasing="ease-in-out"  dataKey="sessionLength" stroke="white" activeDot={{ r: 8 }} />
            <XAxis 
                dataKey="day"
                tickFormatter={dayFormatter}
                interval={0}
                axisLine={false}
                tickLine={false}
                stroke='#ffffff'
            />
            <YAxis type="number" domain={['dataMin - 10', 'dataMax']} padding={{ top: 80, bottom: 15 }} hide={true}   />
            
            <Tooltip content={<CustomTooltip />}  cursor={<CustomizedCursor />}/>
            
            </LineChart>
        </ResponsiveContainer>
    </div>
    );
}

