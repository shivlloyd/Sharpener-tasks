import { useRef, useContext, useEffect } from "react";

import AuthContext from "../../Store/AuthContext";
import classes from "./ProfileForm.module.css";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const fullNameInputRef = useRef();
  const profileUrlInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCprTZVW6b9fM51Dp_WL5C-T5yTGXa7t9s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authCtx.token,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const userData = data.users[0];
        fullNameInputRef.current.value = userData.displayName;
        profileUrlInputRef.current.value = userData.photoUrl;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cancelHandler = () => {
    navigate("/");
  };

  const updateProfile = (event) => {
    event.preventDefault();

    const enteredName = fullNameInputRef.current.value;
    const enteredPhotoURL = profileUrlInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCprTZVW6b9fM51Dp_WL5C-T5yTGXa7t9s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          displayName: enteredName,
          photoUrl: enteredPhotoURL,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //Handle the successful response here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
    fullNameInputRef.current.value = "";
    profileUrlInputRef.current.value = "";
  };

  return (
    <div>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" ref={fullNameInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="photot-url">Profile Photot URL</label>
          <input
            type="text"
            id="photot-url"
            ref={profileUrlInputRef}
            required
          />
        </div>
        <div className={classes.action}>
          <button onClick={updateProfile} className={classes.update}>
            Update
          </button>
        </div>
      </form>
      <button onClick={cancelHandler} className={classes.cancel}>
        Cancel
      </button>
    </div>
  );
};

export default ProfileForm;
