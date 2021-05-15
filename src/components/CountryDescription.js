const CountryDescription = ({ desc }) => {
  const { indicatorCode, indicatorName, countryCode } = desc;
  return (
    <>
      <p>{indicatorCode}</p>
      <p>{indicatorName}</p>
      <p>{countryCode}</p>
    </>
  );
};

export default CountryDescription;
