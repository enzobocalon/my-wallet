import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as S from './style'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Expenses', 'Income', 'Balance'],
  datasets: [
    {
      label: '# of Votes',
      data: [20000, 5000, 12234],
      backgroundColor: [
        '#226FEE',
        '#FE4267',
        '#DDE3F4',
      ],
      borderColor: [
        '#226FEE',
        '#FE4267',
        '#DDE3F4'
      ],
      borderWidth: 1,
    },
  ],
};


const Statistics = () => {
  return (
    <S.Container>    
        <h1>Statistics</h1>
        <Doughnut data={data} options={{maintainAspectRatio: false, responsive: true}} style={{minHeight: "450px", maxHeight: "450px"}}/>
    </S.Container>
  )
}

export default Statistics