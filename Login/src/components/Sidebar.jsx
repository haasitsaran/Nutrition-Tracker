import React from "react";
import { Link } from "react-router-dom";

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#0A1F44",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 0",
    display: "block",
  },
};

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2>CodeCrew</h2>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/meal-log" style={styles.link}>Meal Log</Link>
      <Link to="/food-suggestions" style={styles.link}>Food Suggestions</Link>
    </div>
  );
};

export default Sidebar;