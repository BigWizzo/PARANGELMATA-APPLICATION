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
    <>
      <form className="country-form" onSubmit={onSubmit}>
        <div className="my-form mb-3">
          <input
            className="form-control"
            type="text"
            value={nat}
            placeholder="Enter Country"
            onChange={(e) => setNat(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="d-grid gap-2 d-md-block">
          <button
            type="submit"
            className="btn btn-primary btn-dark"
            value="Submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CountryForm;
