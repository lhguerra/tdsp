import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import horizontalBikeData, {
  HorizontalBikeDTO,
} from "../../data/horizontalBike";

type HorizontalBikeSerie = {
  name: string;
  data: number[];
};

const keys: (keyof HorizontalBikeDTO)[] = ["time", "calories", "distance"];

const normalizeSeries = (data: HorizontalBikeDTO[]): HorizontalBikeSerie[] =>
  keys.map(key => ({ name: key, data: data.map(d => Number(d[key])) }));

const options = {
  title: {
    text: "Horizontal Bike",
  },
  series: normalizeSeries(horizontalBikeData),
};

const HorizontalBike = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default HorizontalBike;
