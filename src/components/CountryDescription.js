const CountryDescription = ({ desc, trends }) => {
  const { countryCode, label } = desc;
  const { yearOne, yearTwo, yearOneVal, yearTwoVal, currentStatus } = trends;
  return (
    <>
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body text-left">
              <p className="card-text">
                Country Name:{' '}
                <span className="card-title">{label.toUpperCase()}</span>
              </p>
              <p className="card-text">
                Country Code: <span className="card-title">{countryCode}</span>
              </p>
              <h4>Description</h4>
              <p className="card-text">
                <small className="text-muted">
                  In the last two years, There has been {currentStatus} of
                  livestock production in {label}. The year {yearOne} had{' '}
                  {yearOneVal} index and {yearTwo} had {yearTwoVal} index.
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h4 className="card-header">TRENDS</h4>
            <div className="card-body">
              <p>{yearOne}</p>
              <p>{currentStatus.toUpperCase()}</p>
              <p>{yearTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDescription;
