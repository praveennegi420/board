import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { colors } from '@mui/material';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
);

const DemoPieChart = () => {

    const data = {
      datasets: [
        {
          label: "Fake Data!",
          data: [55, 31, 14],
          backgroundColor: [
            "#98D89E",
            "#F6DC7D",
            "#EE8484",
          ],
        },
      ],
    };

  return (
    <div className="pie__chart">
      <h3>Top Products</h3>
      <div className='flex'>
        <div className="pie__chart__box">
          <Doughnut
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            data={data}
          />
        </div>
        <div className='products'>
            <div>
              <div className='circle green-circle'></div>
              <h4>Basic Tees</h4>
            </div>
            <div>
              <div className='circle yellow-circle'></div>
              <h4>Custom Shorts</h4>
            </div>
            <div>
              <div className='circle red-circle'></div>
              <h4>Super Hoodies</h4>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DemoPieChart;