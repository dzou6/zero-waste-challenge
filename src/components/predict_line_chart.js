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
            {/* <CartesianGrid strokeDasharray="3 3"/> */}
            <Tooltip />
            <Legend width={161} wrapperStyle={{ top: 172, right: 30, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <ReferenceLine y={fishAvgWeight} label={{value: "Estimated Fish in Total (548423.6)", fill: '#128f76', position: "top"}} strokeWidth={3} stroke="#128f76" strokeDasharray="3 3" />
            <Line name="Plastic in the Ocean" type="monotone" dataKey="plasticInOcean" stroke="red" dot={false} strokeWidth={3} activeDot={{r: 5}}>
                
            </Line>
        </LineChart>
    );
}

export default PredictLineChart;