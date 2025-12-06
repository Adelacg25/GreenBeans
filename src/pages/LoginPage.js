import React, { useState } from "react";
import "../styles/LoginPage.css";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //  dummy

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login logic
    const dummyUser = {
      user_id: 1,
      name: "Clarissa Garcia",
      email: "cgarci11@trinity.edu",
     
    };

    if (email === dummyUser.email) {
      onLogin(dummyUser);
      alert(`Logged in as ${dummyUser.name}`);
    } else {
      alert("Invalid email");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
