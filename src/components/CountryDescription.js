const CountryDescription = ({ desc }) => {
  const { countryCode, label } = desc;
  return (
    <>
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <h4 className="card-header">Trend</h4>
            <div className="card-body">
              <p>Dropping</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{label}</h5>
              <p className="card-text">{countryCode}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDescription;
