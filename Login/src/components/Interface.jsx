// import React from "react";

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//     fontFamily: "Arial, sans-serif",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "20px",
//     borderRadius: "15px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     width: "400px",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "15px",
//     color: "#333",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// function Dashboard() {
//   const handleLogout = () => {
//     // Clear user session or token (if implemented)
//     alert("You have been logged out!");
//     window.location.href = "/"; // Redirect to login page
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.heading}>Welcome to the Dashboard!</h1>
//         <p>You have successfully logged in.</p>
//         <button style={styles.button} onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    backgroundImage: "None",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#162031",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  sidebarItem: {
    fontSize: "18px",
    color: "#ffffff",
    textDecoration: "none",
    margin: "10px 0",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
  },
  filters: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  filterButton: {
    backgroundColor: "#12b886",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  nutrientRow: {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px 0",
    fontSize: "16px",
  },
};

function Dashboard() {

    const handleLogout = () => {
            // Clear user session or token (if implemented)
            alert("You have been logged out!");
            window.location.href = "/"; // Redirect to login page
          };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>CodeCrew</h2>
        <a href="#" style={styles.sidebarItem}>
          Dashboard
        </a>
        <a href="#" style={styles.sidebarItem}>
          Meal Log
        </a>
        <a href="#" style={styles.sidebarItem}>
          Food Suggestions
        </a>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Filters Section */}
        <div style={styles.card}>
          <h3>Select Filters</h3>
          <div style={styles.filters}>
            <button style={styles.filterButton}>Vegan</button>
            <button style={styles.filterButton}>Vegetarian</button>
            <button style={styles.filterButton}>Non-Veg</button>
            <button style={styles.filterButton}>Breakfast</button>
            <button style={styles.filterButton}>Lunch</button>
            <button style={styles.filterButton}>Dinner</button>
            <button style={styles.filterButton}>Snacks</button>
          </div>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "transparent",
              color: "#6c757d",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            RESET FILTERS
          </button>
        </div>

        {/* Highlighted Nutrients Section */}
        <div style={styles.card}>
          <h3>Highlighted Nutrients</h3>
          <div style={styles.nutrientRow}>
            <div>
              <h4>0%</h4>
              <p>Calories</p>
            </div>
            <div>
              <h4>0%</h4>
              <p>Protein</p>
            </div>
            <div>
              <h4>0%</h4>
              <p>Iron</p>
            </div>
            <div>
              <h4>0%</h4>
              <p>Vit. B12</p>
            </div>
          </div>
          <div>
            <h4>General</h4>
            <div style={styles.nutrientRow}>
              <div>Energy - kcal</div>
              <div>Water - g</div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleLogout}>
           Logout
        </button>
    </div>
  );
}

export default Dashboard;
