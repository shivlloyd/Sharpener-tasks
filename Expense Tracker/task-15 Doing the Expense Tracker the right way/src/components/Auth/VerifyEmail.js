import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Store/AuthContext";
import "./VerifyEmail.css";

const VerifyEmail = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const VerifyEmailHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCprTZVW6b9fM51Dp_WL5C-T5yTGXa7t9s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authCtx.token,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Verification link sent to your email");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="verify-email">
      <button onClick={VerifyEmailHandler}>Verify Email</button>
    </div>
  );
};

export default VerifyEmail;
