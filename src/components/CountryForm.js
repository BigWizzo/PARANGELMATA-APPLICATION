import React, { useState } from 'react';

const CountryForm = ({ onSub }) => {
  const [nat, setNat] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!nat) {
      alert('Please enter Country Name');
    }

    onSub({ nat });
    setNat('');
  };

  return (
    <>
      <form className="country-form m-auto mb-5" onSubmit={onSubmit}>
        <div className="my-form mb-3">
          <input
            className="form-control"
            type="text"
            value={nat}
            placeholder="Enter Country"
            onChange={(e) => setNat(e.target.value)}
          />
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
