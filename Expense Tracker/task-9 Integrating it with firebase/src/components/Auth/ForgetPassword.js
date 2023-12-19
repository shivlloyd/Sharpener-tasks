import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import AuthContext from "../../Store/AuthContext";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const passwordHandler = () => {
    const enteredEmail = emailInputRef.current.value;
    try {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCprTZVW6b9fM51Dp_WL5C-T5yTGXa7t9s",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enteredEmail,
          }),
        }
      )
        .then((res) => {
          if (res.ok) {
            alert("Password rest link sent to your email");
            navigate("/auth");
          } else {
            throw new Error("Error while sending password reset link");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Enter valid Email");
        });
    } catch {
      alert("Enter valid email");
    }
  };

  return (
    <div className="forget-password">
      <div className="control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required ref={emailInputRef} />
      </div>
      <button onClick={passwordHandler}>Reset Password</button>
    </div>
  );
};

export default ForgetPassword;
