import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../helper";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(API_URL + `/users/register`, {
        email,
        password,
        passwordAgain,
      });

      if (!data.success) {
        setError(data.message);
      } else {
        setError("");
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
      setError("An error occured while registering.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>Account registered successfully!</p>}
    </>
  );
};

export default Register;
