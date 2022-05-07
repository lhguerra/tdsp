import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import threadmilData, { ThreadmilDTO } from "../../data/threadmil";

type ThreadmilSerie = {
  name: string;
  data: number[];
};

const keys: (keyof ThreadmilDTO)[] = ["time", "calories", "distance"];

const normalizeSeries = (data: ThreadmilDTO[]): ThreadmilSerie[] =>
  keys.map(key => ({ name: key, data: data.map(d => Number(d[key])) }));

const options = {
  title: {
    text: "Threadmil",
  },
  series: normalizeSeries(threadmilData),
};

const Threadmil = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default Threadmil;
