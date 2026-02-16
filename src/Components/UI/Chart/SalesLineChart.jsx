import { Line } from "react-chartjs-2";

// Register chart parts

const SalesLineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Average Sale Value",
        data: [25, 25, 23, 20, 25, 23, 20, 24, 30, 29, 30, 35],
        borderColor: "#A3E635",
        backgroundColor: "transparent",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
      },
      {
        label: "Average Item Per Sale",
        data: [22, 22, 24, 23, 20, 19, 22, 21, 24, 23, 35, 28],
        borderColor: "#2563EB", // blue
        backgroundColor: "transparent",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        borderDash: [12, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ height: "180px", width: "99%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesLineChart;
