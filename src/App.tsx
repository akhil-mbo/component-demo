import { useEffect, useState } from "react";

import { fetchData, RespData } from "./utils/fetch";

import "./App.scss";

const App = () => {
  const [text, setText] = useState("");

  const getData = async () => {
    const res: RespData = await fetchData(2000);

    setText(res.message);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>{text}</h1>
    </div>
  );
};

export default App;
