import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  input: {
    display: "block",
    width: "90%",
    padding: "10px",
    margin: "10px 0",
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
    margin: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "14px",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });
    //   alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);x
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p>
          New User? <a href="/signup" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
