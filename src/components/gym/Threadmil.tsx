import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Threadmil',
  },
  series: [
    {
      name: 'time',
      data: [30.39, 30.02, 30.58, 30.0, 16.25, 17.03, 18.36, 19.14],
    },
    {
      name: 'calories',
      data: [269, 265, 286, 283, 150, 160, 180, 190],
    },
    {
      name: 'distance',
      data: [3.84, 3.78, 4.09, 4.03, 2.14, 2.28, 2.56, 2.7],
    },
  ],
}

const Threadmil = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
)

export default Threadmil
