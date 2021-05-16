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
      <form className="country-form w-75 m-auto mb-5" onSubmit={onSubmit}>
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
        <div className="d-grid gap-2 d-block">
          <button
            type="submit"
            className="btn btn-primary font-weight-bolder"
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
