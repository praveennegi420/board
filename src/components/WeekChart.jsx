import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const WeekChart = () => {

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: `User`,
        data: [500,350,200,400],
        backgroundColor: "#98D89E",
        borderRadius: 8,
        borderColor: "#ee8484",
      },
      {
        label: `Guest`,
        data: [400,450,300,350],
        backgroundColor: "#EE8484",
        borderRadius: 8,
        borderColor: "#ee8484",
      }
    ],
  };

  return (
    <div className="chart__container">
      <h2>Activities</h2>
      <p className="last__updated">May - June 202</p>

      <div className="chart-box">
        <Bar
          options={{
            responsive: true,
            maintainAspectRatio: false,
            barPercentage: 0.7,
            categoryPercentage: 0.6
          }}
          data={data}
        />
      </div>
    </div>
  );
};

export default WeekChart;