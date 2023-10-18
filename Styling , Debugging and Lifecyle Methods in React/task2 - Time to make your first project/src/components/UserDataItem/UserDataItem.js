import React from "react";
import "./UserDataItem.css";

const UserDataItem = (props) => {
  const onClickHandler = () => {
    props.manageDelete(props.id);
  };

  return (
    <li key={props.id} onClick={onClickHandler}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserDataItem;
