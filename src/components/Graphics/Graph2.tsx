


import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

 const data = [
  {
    "name": "AA",
    "Legend1": 175
  },
  {
    "name": "BB",
    "Legend1": 200
  },
  {
    "name": "CC",
    "Legend1": 200,
  },
  {
    "name": "DD",
    "Legend1": 175
  },
  {
    "name": "EE",
    "Legend1": 175
  },
  {
    "name": "FF",
    "Legend1": 197
  }
]

export default function Graph2 (){
 
    return (
      <div style={{height:544}}>
      <BarChart width={730} height={400} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Legend1" fill="#386978" />
</BarChart>
      </div>
    )
  }
  

