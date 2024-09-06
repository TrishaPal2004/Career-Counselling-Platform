import React, { useState, useEffect } from "react";
import "./signupstyles.css"; // Import your CSS file here
import axios from "axios";
import { Alert } from "bootstrap";
const SignUp = () => {
  // State to manage form inputs
  const [data, setdata] = useState([]);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Age: "",
    Phone: "",
    Career: "",
    Password: "",
  });

  // State to manage error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);

      // try {
      //   const res = await axios.post(
      //     "http://localhost:3001/signup/register",
      //     formData
      //   );
      // } catch (error) {
      //   console.log(error);
      // }

      fetch("http://localhost:3000/signup/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    }
  };

  // Validate the form before submission
  const validateForm = () => {
    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Age ||
      !formData.Phone ||
      !formData.Career
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    // setErrorMessage('');
    return true;
  };

  return (
    <div className="container">
      <h2>Sign Up for Career Counseling</h2>
      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter your name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter your email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            placeholder="Enter your Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="Age"
            placeholder="Enter your age"
            value={formData.Age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="Phone"
            placeholder="Enter your phone number"
            value={formData.Phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="career">Career Field of Interest</label>
          <select
            id="career"
            name="Career"
            value={formData.Career}
            onChange={handleChange}
            required
          >
            <option value="">Select your interest</option>
            <option value="engineering">Engineering</option>
            <option value="medicine">Medicine</option>
            <option value="arts">Arts</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {errorMessage && <div id="errorMessage">{errorMessage}</div>}
    </div>
  );
};

export default SignUp;
