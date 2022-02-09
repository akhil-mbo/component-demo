/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";

import Card from "./components/Card/Card";
import fetchData, { fetchValue } from "./utils/fetch";

import "./App.scss";

const App = () => {
  const [data, setData] = useState<fetchValue[]>([]);

  const getData = async () => {
    const res = await fetchData(3000);

    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {data.length > 0 &&
        data.map((item, i) => (
          <Card
            key={i}
            status={item.status}
            amount={item.amount}
            companyName={item.companyName}
            paidDate={item.transactionDate}
            startDate={item.startDate}
            endDate={item.endDate}
            ids={item.jobId}
          />
        ))}
    </div>
  );
};

export default App;
