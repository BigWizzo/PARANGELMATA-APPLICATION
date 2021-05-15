import React from 'react';

const CountryDescription = ({ desc }) => {
  const { indicatorCode, indicatorName, countryCode } = desc;
  return (
    <div>
      <p>{indicatorCode}</p>
      <p>{indicatorName}</p>
      <p>{countryCode}</p>
    </div>
  );
};

export default CountryDescription;
