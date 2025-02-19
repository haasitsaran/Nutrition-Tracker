import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginBackground from "./assets/LoginBackground.jpg";
import Interface from "./components/Interface";

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${LoginBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  contentContainer: {
    // backgroundColor: "rgba(100, 100, 100, 0.7)", // Semi-transparent background
    backgroundColor: "transparent", // Semi-transparent background
    borderRadius: "16px",
    padding: "32px",
    width: "100%",
    maxWidth: "100%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    color: "white",
  },
};

function App() {
  return (
    <div style={styles.appContainer}>
      <div style={styles.contentContainer}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Interface />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
