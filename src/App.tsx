/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";

import Card from "./components/Card/Card";
import fetchData, { fetchValue } from "./utils/fetch";

import "./App.scss";

const App = () => {
  const [data, setData] = useState<fetchValue[] | number[]>([1, 2, 3, 4]);

  const getData = async () => {
    const res = await fetchData(3000);

    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {data.map((item, i) => {
        if (typeof item !== "number") {
          return (
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
          );
        }

        return (
          <Card
            key={i}
            status={null}
            amount={null}
            companyName={null}
            paidDate={null}
            startDate={null}
            endDate={null}
            ids={null}
          />
        );
      })}
    </div>
  );
};

export default App;
