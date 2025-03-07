import React, { useState } from "react";
import "../assets/css/registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    maritalStatus: "",
    profession: "",
    salaryBracket: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    hasKids: false,
    kidsStage: "",
    vehicleType: "",
    vehicleCount: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="registration-page">
      <div className="background-image"></div>
      <div className="form-wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
            <select name="gender" onChange={handleChange} required>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Primary Email" onChange={handleChange} required />
            <select name="maritalStatus" onChange={handleChange} required>
              <option value="">Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>

          <div className="form-row">
            <select name="profession" onChange={handleChange} required>
              <option value="">Profession</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
            <select name="salaryBracket" onChange={handleChange} required>
              <option value="">Salary Bracket</option>
              <option value="low">Less than $30k</option>
              <option value="mid">$30k - $60k</option>
              <option value="high">More than $60k</option>
            </select>
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required />
            <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required />
          </div>

          <div className="form-row">
          <select name="do-you-have-kids" onChange={handleChange} required>
              <option value="">Do you have Kids?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <select name="kidsStage" onChange={handleChange} disabled={!formData.hasKids}>
              <option value="">Kids Stage</option>
              <option value="infant">Infant</option>
              <option value="toddler">Toddler</option>
              <option value="teenager">Teenager</option>
            </select>
          </div>

          <div className="form-row">
            <select name="vehicleType" onChange={handleChange} required>
              <option value="">What vehicle do you drive?</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
            </select>
            <input type="number" name="vehicleCount" placeholder="How many vehicles do you own?" onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">Save and Next</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
