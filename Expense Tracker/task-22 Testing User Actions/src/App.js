import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./Store/AuthContext";
import AuthContext from "./Store/AuthContext";
import { useContext } from "react";
import ForgetPassword from "./components/Auth/ForgetPassword";
import { ExpenseContextProvider } from "./Store/ExpenseContext";
import { useSelector } from "react-redux";

function App() {
  const authCtx = useContext(AuthContext);
  const isDarkMode = useSelector((state) => state.theme.isDark);

  return (
    <div className={`${isDarkMode ? "darkTheme" : ""}`}>
      <ExpenseContextProvider>
        <AuthContextProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {!authCtx.isLoggedIn && (
                  <Route path="/auth" element={<AuthPage />} />
                )}
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
              </Routes>
            </Layout>
          </Router>
        </AuthContextProvider>
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
