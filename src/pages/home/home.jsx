import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

import Title from "../../components/title/title";

import { HomeWrapper, ChartWrapper, ChartTitle } from "./styles";

import { options, dataBarChart, dataPiChart, optionsLineChart } from "./mock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,

  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Home page</Title>
      <ChartWrapper>
        <ChartTitle> Bar chart </ChartTitle>
        <Bar options={options} data={dataBarChart} />
      </ChartWrapper>
      <ChartWrapper>
        <ChartTitle> Pie chart </ChartTitle>
        <Pie data={dataPiChart} />
      </ChartWrapper>
      <ChartWrapper>
        <ChartTitle> Line chart </ChartTitle>
        <Line data={dataBarChart} options={optionsLineChart} />
      </ChartWrapper>
    </HomeWrapper>
  );
};

export default Home;
