import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  // Insérez ici les données de votre graphique
  { name: 'Minable (<5%)', value1: 4, value2: 2 },
  { name: 'Minable (<5%)', value1: 5, value2: 2 },
  { name: 'Minable (<5%)', value1: 2, value2: 2 },
  { name: 'Minable (<5%)', value1: 4, value2: 2 },
  { name: 'Minable (<5%)', value1: 4, value2: 2 },
  { name: 'Minable (<5%)', value1: 4, value2: 2 },
  { name: 'Minable (<5%)', value1: 4, value2: 2 },
  // ...autres données...
];

const BarGraph = () => {
  return (
    
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ 
            backgroundColor: 'grey', 
            borderRadius: '10px', 
            borderColor: 'grey' // Pour assortir la bordure avec le fond
          }}/>
        <Legend />
        <Bar dataKey="value1" fill="#1F70BF" radius={[10, 10, 0, 0]} />
        <Bar dataKey="value2" fill="#FFFFFF" radius={[10, 10, 0, 0]} />
      </BarChart>
  );
};

export default BarGraph;
