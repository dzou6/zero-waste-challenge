import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ReferenceLine} from 'recharts';

//line chart componet to display predict data
const PredictLineChart = (props) => {
    //read the data and fish AVG weight from props
    const {data, fishAvgWeight} = props;
    return (
        <LineChart width={860} height={500} data={data}  // line chart for prediction page with two lines
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="year">
                <Label value="Year" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis  label={{ value: 'Tonnes', angle: -90, position: 'left', offset: 10 }} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Legend align="right" verticalAlign="top"/>
            <ReferenceLine y={fishAvgWeight} label={{value: "Estimated Fish In Total (548423.6)", position: "top"}} stroke="red" strokeDasharray="3 3" />
            <Line name="Plastic In Ocean" type="monotone" dataKey="plasticInOcean" stroke="#8884d8" dot={false} activeDot={{r: 5}} />
        </LineChart>
    );
}

export default PredictLineChart;