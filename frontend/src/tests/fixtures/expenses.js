import moment from "moment";

const expenses = [
  {
    id: "1",
    title: "lunch",
    description: "",
    amount: 80,
    createdAt: 5,
  },
  {
    id: "2",
    title: "Rent",
    description: "Lake",
    amount: 14000,
    createdAt: moment(0).add(4, "months").valueOf(),
  },
  {
    id: "3",
    title: "Water bill",
    description: "",
    amount: 700,
    createdAt: moment(0).subtract(5, "months").valueOf(),
  },
];

export default expenses;
