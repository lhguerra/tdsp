export type ThreadmilDTO = {
  id: string;
  time: number;
  calories: number;
  distance: number;
  date: string;
};

const data: ThreadmilDTO[] = [
  {
    id: "1",
    time: 1823.4,
    calories: 269,
    distance: 3.84,
    date: "2021-12-12",
  },
  {
    id: "2",
    time: 1801.2,
    calories: 265,
    distance: 3.78,
    date: "2021-12-13",
  },
  {
    id: "3",
    time: 1834.8,
    calories: 286,
    distance: 4.09,
    date: "2021-12-14",
  },
  {
    id: "4",
    time: 1800,
    calories: 283,
    distance: 4.03,
    date: "2021-12-18",
  },
  {
    id: "5",
    time: 975,
    calories: 150,
    distance: 2.14,
    date: "2022-03-28",
  },
  {
    id: "6",
    time: 1021.8,
    calories: 160,
    distance: 2.28,
    date: "2022-03-29",
  },
  {
    id: "7",
    time: 1101.6,
    calories: 180,
    distance: 2.56,
    date: "2022-04-04",
  },
  {
    id: "8",
    time: 1148.4,
    calories: 190,
    distance: 2.7,
    date: "2022-04-05",
  },
];

export default data;
