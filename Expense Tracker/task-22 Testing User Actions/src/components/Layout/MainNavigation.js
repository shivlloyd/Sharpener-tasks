import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import AuthContext from "../../Store/AuthContext";
import { themeActions } from "../../Store/theme-slice";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedIn = authCtx.isLoggedIn;
  const dispatch = useDispatch();

  //redux premium
  const premium = useSelector((state) => state.auth.isPremium);
  const items = useSelector((state) => state.expenseStore.items);
  const isDarkMode = useSelector((state) => state.theme.isDark);

  const toggleDarkModeHandler = () => {
    dispatch(themeActions.toggelTheme());
  };

  const downloadHandler = () => {
    // Convert the array of items to CSV format
    const csvData = Papa.unparse(items);

    // Create a Blob with the CSV data
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });

    // Use file-saver to save the Blob as a CSV file
    saveAs(blob, "expenses.csv");
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("./auth");
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Expense Tracker</div>
      </Link>
      <nav>
        <ul>
          {premium && (
            <li>
              <button onClick={toggleDarkModeHandler}>{`${
                isDarkMode ? "Light Mode" : "Dark Mode"
              }`}</button>
              <button onClick={downloadHandler}>Download Expenses</button>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
