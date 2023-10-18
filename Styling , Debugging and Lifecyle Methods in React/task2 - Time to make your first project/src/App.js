import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm.js";
import UserList from "./components/UserList/UserList.js";
import InvalidInput from "./conditionals/InvalidInput.js";

function App() {
  const [userDataArray, setUserDataArray] = useState([]);
  const [showInvalidInput, setShowInvalidInput] = useState(false);
  const [age, setAge] = useState(1);

  const userDataList = (userData) => {
    if (userData.name === "" || userData.age === "") {
      setShowInvalidInput(true);
      setAge(1);
    } else if (Number(userData.age) <= 0) {
      setShowInvalidInput(true);
      setAge(Number(userData.age));
    } else {
      setUserDataArray((prevData) => {
        const updatedData = [...prevData];
        updatedData.unshift(userData);
        return updatedData;
      });
    }
  };

  const manageDelete = (userId) => {
    setUserDataArray((prevData) => {
      const updatedData = prevData.filter((data) => data.id !== userId);
      return updatedData;
    });
  };

  const handleOkayClick = () => {
    setShowInvalidInput(false);
  };

  let UserLists = "";
  if (userDataArray.length > 0) {
    UserLists = (
      <UserList
        userDataList={userDataArray}
        manageDelete={manageDelete}
        onOkayClick={handleOkayClick}
      />
    );
  }

  return (
    <div onClick={handleOkayClick}>
      <UserForm userData={userDataList} />
      {showInvalidInput ? (
        <InvalidInput onOkayClick={handleOkayClick} age={age} />
      ) : (
        UserLists
      )}
    </div>
  );
}

export default App;
