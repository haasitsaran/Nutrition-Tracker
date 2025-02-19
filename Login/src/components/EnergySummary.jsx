import React from "react";

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "800px",
    margin: "20px auto",
    display: "flex",
    justifyContent: "space-between",
  },
  section: {
    textAlign: "center",
    flex: 1,
    color: "black",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "black",
  },
  subText: {
    color: "green",
    fontSize: "14px",
    display: "flex",
  },
  progressBarContainer: {
    width: "100%",
    height: "6px",
    backgroundColor: "lightblue",
    borderRadius: "10px",
    margin: "5px 0",
  },
  progressBar: {
    height: "6px",
    backgroundColor: "Black",
    borderRadius: "10px",
  },
};

const EnergySummary = () => {
  const energy = {
    consumed: 0,
    burned: 2181,
    remaining: 2181,
    targets: {
      energy: 2181,
      protein: 136.3,
      netCarbs: 245.4,
      fat: 72.7,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h3 style={styles.heading}>Energy Summary</h3>
        <div>
          <p style={styles.subText}>Consumed</p>
          <p>{energy.consumed} kcal</p>
        </div>
        <div>
          <p style={styles.subText}>Burned</p>
          <p>{energy.burned} kcal</p>
        </div>
        <div>
          <p style={styles.subText}>Remaining</p>
          <p>{energy.remaining} kcal</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Targets</h3>
        {Object.entries(energy.targets).map(([key, value]) => {
          const progress = 0; 
          return (
            <div key={key}>
              <p style={styles.subText}>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <div style={styles.progressBarContainer}>
                <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
              </div>
              <p>{`0.0 / ${value} ${key === "energy" ? "kcal" : "g"}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnergySummary;