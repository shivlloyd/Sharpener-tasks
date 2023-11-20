import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";
import Button2 from "./components/UI/Button/Button2";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [order, setOrder] = useState("");
  const [buttonName, setButtonName] = useState("Change To Ascending Order");
  const [flag, setFlag] = useState(0);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeTitleHandlerTwo = useCallback(() => {
    if (flag === 0) {
      setFlag(1);
      setOrder("asc");
      setListTitle("Ascending Order");
      setButtonName("Change To Descending Order");
    } else {
      setFlag(0);
      setOrder("desc");
      setListTitle("Descending Order");
      setButtonName("Change To Ascending Order");
    }
  }, [flag]);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList order={order} title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button2 onClick={changeTitleHandlerTwo}>{buttonName}</Button2>
    </div>
  );
}

export default App;
