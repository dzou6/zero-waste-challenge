import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ReferenceLine} from 'recharts';
const PredictLineChart = (props) => {
    const {data, fishAvgWeight} = props;
    return (
        <LineChart width={860} height={520} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="year">
                <Label value="Year" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis  label={{ value: 'Tonnes', angle: -90, position: 'left', offset: 10 }} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <ReferenceLine y={fishAvgWeight} label={{value: "Fish Average Weight", position: "top"}} stroke="red" strokeDasharray="3 3" />
            <Line name="Plastic Amount In Ocean" type="monotone" dataKey="plasticInOcean" stroke="#8884d8" dot={false} activeDot={{r: 5}} />
        </LineChart>
    );
}

export default PredictLineChart;