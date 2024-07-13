import React, { useState } from "react";

function RegistrationForm() {
  const [stdName, setStdName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("Sceince");
  const [consent, setConsent] = useState("");
  //   Handle Change for all the above fields
  const handleNameChange = (e) => {
    setStdName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleConsentChange = (e) => {
    setConsent(e.target.value);
  };
  //   handle submit
  const handleSubmit = (e) => {
    // prevent browser default
    e.preventDefault();
    console.log({
      stdName,
      age,
      course,
      consent,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration form</h1>
      <div>
        <label>Name: </label>
        <input type="text" value={stdName} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Course: </label>
        <select value={course} onChange={handleCourseChange}>
          <option value="Science">Science</option>
          <option value="Art">Art</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>
      <div>
        <label>Consent: </label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        />
      </div>
      <button type="Submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
