import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, gender, ageGroup });
    history.push('/results');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="age-group">Age group:</label>
      <select id="age-group" value={ageGroup} onChange={(event) => setAgeGroup(event.target.value)}>
        <option value=""></option>
        <option value="under-18">Under 18</option>
        <option value="18-30">18-30</option>
        <option value="31-50">31-50</option>
        <option value="over-50">Over 50</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;