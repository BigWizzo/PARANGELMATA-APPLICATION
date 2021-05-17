const CountryDescription = ({ desc, trends }) => {
  const { countryCode, label } = desc;
  const { yearOne, yearTwo, yearOneVal, yearTwoVal, currentStatus } = trends;
  return (
    <>
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body text-left">
              <p className="country-wrap font-22">
                <span>Country Name: </span>
                <span className="country-code green-800 font-22">
                  {label.toUpperCase()}
                </span>
              </p>
              <p className="card-text">
                <span>Country Code: </span>
                <span className="card-title">{countryCode}</span>
              </p>
              <p className="mute-p">
                <small className="text-muted">
                  In the last two years, There has been {currentStatus} of
                  livestock production in {label}. The year {yearOne} had{' '}
                  {yearOneVal} index and {yearTwo} had {yearTwoVal} index.
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h4 className="card-hed font-italic">TRENDS</h4>
            <hr />
            <div className="card-body">
              <div>{yearOne}</div>
              <div className="icon-div py-3">
                <div className="icon-span ">
                  {yearTwoVal > yearOneVal ? (
                    <div className="">
                      <p className="m-0 font-10 text-success">Increase</p>
                      <p className="increase m-0">
                        <i className="far fa-arrow-alt-circle-up font-22 text-success"></i>
                      </p>
                    </div>
                  ) : yearTwoVal < yearOneVal ? (
                    <div className="">
                      <p className="m-0 font-10 text-danger">Decrease</p>
                      <p className="decrease m-0">
                        <i className="far fa-arrow-alt-circle-down font-22 text-danger"></i>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="m-0 font-10 text-success">No Change</p>
                      <p className="no-change m-0">
                        <i className="fas fa-arrows-alt-h font-22"></i>
                      </p>
                    </div>
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
