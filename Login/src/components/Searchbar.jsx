import React from "react";
import Imagei from "../assets/Imagei.jpg"
import Arrowi from "../assets/Arrowi.jpg"


const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    border: "2px solid black",
    borderRadius: "25px",
    padding: "5px 10px",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "16px",
    padding: "5px",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "5px",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
};

const SearchBar = () => {
  const handleImageUpload = () => {
    alert("Image upload clicked!");
  };

  const handleSearch = () => {
    alert("Search button clicked!");
  };

  return (
    <div style={styles.container}>
      <input type="text" placeholder="Search..." style={styles.input} />
      <button onClick={handleImageUpload} style={styles.button}>
        <img src={Imagei} alt="Upload" style={styles.icon} />
      </button>
      <button onClick={handleSearch} style={styles.button}>
        <img src={Arrowi} alt="Search" style={styles.icon} />
      </button>
    </div>
  );
};

export default SearchBar;