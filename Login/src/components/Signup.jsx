import React, { useState } from "react";
import axios from "axios";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "transparent",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    backgroundColor: "rgba(19, 19, 19, 0.7)",
    padding: "20px",
    paddingRight: "10px",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  input: {
    display: "block",
    width: "90%",
    padding: "10px",
    margin: "10px 0px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    width: "50%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    margin: "10px 0",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "14px",
  },
};

function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/signup", {
        name,
        age,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        <p>
          Existing user? <a href="/" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
