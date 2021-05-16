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
              <div>{yearOne}</div>
              <div className="icon-div">
                <div className="icon-span">
                  {yearTwoVal > yearOneVal ? (
                    <span className="increase">
                      Increase <i className="far fa-arrow-alt-circle-up"></i>
                    </span>
                  ) : yearTwoVal < yearOneVal ? (
                    <span className="decrease">
                      Decrease <i className="far fa-arrow-alt-circle-down"></i>
                    </span>
                  ) : (
                    <span className="no-change">
                      No Change <i className="fas fa-arrows-alt-h"></i>
                    </span>
                  )}
                </div>
              </div>
              <div>{yearTwo}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDescription;
