export type HorizontalBikeDTO = {
  id: string;
  time: number;
  calories: number;
  distance: number;
  date: string;
};

const data: HorizontalBikeDTO[] = [
  {
    id: "1",
    time: 621.6,
    calories: 75.5,
    distance: 1.6,
    date: "2022-04-21",
  },
  {
    id: "2",
    time: 484.2,
    calories: 90.2,
    distance: 2.5,
    date: "2022-04-22",
  },
  {
    id: "3",
    time: 745.8,
    calories: 100,
    distance: 2.6,
    date: "2022-04-22",
  },
  {
    id: "4",
    time: 900,
    calories: 0,
    distance: 0,
    date: "2022-05-03",
  },
];

export default data;
