import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const usersList = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    };

    props.userData(usersList);
    setUserAge("");
    setUserName("");
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <label className="label">Username</label>
      <input
        className="form input"
        type="text"
        onChange={nameChangeHandler}
        value={userName}
      />
      <label className="label">Age (Years)</label>
      <input
        className="form input"
        type="text"
        onChange={ageChangeHandler}
        value={userAge}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
