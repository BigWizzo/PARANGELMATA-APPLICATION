import React, { useState } from 'react';

const CountryForm = ({ onSub }) => {
  const [nat, setNat] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (nat) {
      setNat(nat.charAt(0).toUpperCase() + nat.slice(1));
    }

    if (!nat) {
      alert('Please enter Country Name');
    }

    onSub({ nat });
  };

  return (
    <form className="country-form" onSubmit={onSubmit}>
      <div className="my-form">
        <input
          type="text"
          value={nat}
          placeholder="Enter Country"
          onChange={(e) => setNat(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CountryForm;
