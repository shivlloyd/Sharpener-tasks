import React from "react";
import "./UserList.css";

import UserDataItem from "../UserDataItem/UserDataItem.js";

const UserList = (props) => {
  return (
    <ul>
      {props.userDataList.map((userData) => (
        <UserDataItem
          key={userData.id}
          id={userData.id}
          name={userData.name}
          age={userData.age}
          manageDelete={props.manageDelete}
        />
      ))}
    </ul>
  );
};

export default UserList;
