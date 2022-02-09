import data from "../data/data.json";

export interface fetchValue {
  status: string;
  companyName: string;
  transactionDate: string;
  jobId: string;
  amount: number;
  startDate: string;
  endDate: string;
}

const fetchData = (delay: number = 3000) =>
  new Promise<fetchValue[]>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });

export default fetchData;
