import React, { useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setClicked(true); 
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Firstname">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          id="Firstname"
          required 
        />
        <br />
        <label htmlFor="Lastname">Last Name:</label>
        <input
          type="text"
          value={secondName}
          onChange={handleSecondNameChange}
          id="Lastname"
          required 
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      
      {clicked ?(
        <div>
          <p> <strong>Full Name:</strong> {firstName} {secondName}</p>
        </div>
      ):""}
    </div>
  );
};

export default FullName;