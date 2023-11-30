import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

 const data = [
  {
    "name": "AA",
    "Legend2": 160,
    "Legend1": 175,
    "Legend3": 50
  },
  {
    "name": "BB",
    "Legend2": 200,
    "Legend1": 195,
    "Legend3": 0
  },
  {
    "name": "CC",
    "Legend2": 200,
    "Legend1": 195,
    "Legend3": 90
  },
  {
    "name": "DD",
    "Legend2": 175,
    "Legend1": 185,
    "Legend3": 75
  },
  {
    "name": "EE",
    "Legend2": 175,
    "Legend1": 185,
    "Legend3": 0
  },
  {
    "name": "FF",
    "Legend2": 197,
    "Legend1": 175,
    "Legend3": 190
  }
]

export default function Graph1 (){
 
    return (
      <div style={{width:800,height:544}}>
      <ResponsiveContainer width="100%" height="100%" >
      <ComposedChart
        width={1116}
        height={544}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
  {/* <BarChart width={1116} height={544} data={data}> */}
   <CartesianGrid strokeDasharray="3 3" />
   <XAxis dataKey="name" />
   <YAxis />
   <Tooltip />
   <Legend align="right"/>
   <Bar dataKey="Legend1" fill="#6D4EC6" />
   <Bar dataKey="Legend2" fill="#942E8A" />
   <Line type="monotone" dataKey="Legend3" stroke="#FFF"/>
  {/* </BarChart> */}
  </ComposedChart>
      </ResponsiveContainer>
      </div>
    )
  }
  

