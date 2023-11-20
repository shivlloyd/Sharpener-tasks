import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items, order } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return order === "asc"
      ? items.sort((a, b) => a - b)
      : items.sort((a, b) => b - a);
  }, [items, order]);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
