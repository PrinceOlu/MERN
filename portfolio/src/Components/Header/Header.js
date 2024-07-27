import React from "react";
import Typical from "react-typical";
import "../Header/Header.css";
import profileImg from "../../assets/profile.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hi! I'm</h1>
        <h2 className="fullname">Prince Olusegun Ojugbele</h2>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Full Stack Developer ✍️",
              5000,
              "Backend Developer ✅",
              5000,
              "Frontend Developer 🚀",
              5000,
              "Mobile-App Developer 😡",
              5000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I'm Prince Olusegun Ojugbele, a junior full stack web (MERN Stack) and
          mobile app developer (React Native) with a passion for leveraging
          technology such as Node/Express, React, MongoDB, JavaScript, HTML/CSS
          to solve real-world business problems.
        </p>

        <h3> **MY MISSION 🚀** </h3>
        <p>
          To help SMEs streamline their operations, complete projects
          efficiently, and reduce costs through innovative web solutions.
        </p>

        <h3>**MY MAGIC ✨** </h3>
        <p>
          Creating scalable web applications, designing user-friendly
          interfaces, solving complex coding challenges, improving business
          processes, and fostering team collaboration.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me!</button>
          <i className="fab fa-cc-visa fa-2x"></i>
          <i className="fab fa-cc-mastercard fa-2x"></i>
          <i className="fab fa-paypal fa-2x"></i>
        </div>
      </div>
      {/* image */}
      <div className="profile-img-container">
        <img src={profileImg} alt="Profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
}

export default Header;
