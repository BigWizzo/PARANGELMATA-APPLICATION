const CountryDescription = ({ desc, trends }) => {
  const { countryCode, label } = desc;
  const { yearOne, yearTwo, currentStatus } = trends;
  return (
    <>
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
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
                  Last updated 3 mins ago Last updated 3 mins ago Last updated 3
                  mins ago Last updated 3 mins ago Last updated 3 mins ago Last
                  updated 3 mins ago Last updated 3 mins ago Last updated 3 mins
                  ago Last updated 3 mins ago Last updated 3 mins ago{' '}
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="card-header">{currentStatus}</h4>
            <div className="card-body">
              <p>{yearOne}</p>
              <p>{yearTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDescription;
