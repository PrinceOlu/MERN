import React, { useEffect, useState } from "react";

const Demo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("18");
  const [course, setCourse] = useState("Science");
  const [consent, setConsent] = useState(false);

  // set the handlers
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked); // Use 'checked' for checkboxes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      age,
      course,
      consent,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleNameChange} />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Demo;
