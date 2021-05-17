import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/countryActions';
import CountryForm from './CountryForm';
import CountryDescription from './CountryDescription';

const CountryList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.livestock);
  const fetchData = (country) => {
    dispatch(
      getData({
        nation: country.nat,
      }),
    );
  };

  return (
    <div className="main">
      <h1 className="py-4 text-center">Parangelmata</h1>
      <CountryForm onSub={fetchData} />
      <div className="content">
        {state.loading && <h4 className="text-center">Loading...</h4>}
        {state.data.labels.length > 0 ? (
          <div className="main-content-wrapper row m-0 p-3">
            <div className="chart-wrapper col-md-6">
              <Bar data={state.data} />
            </div>
            <div className="country-desc col-md-6">
              <CountryDescription desc={state.desc} trends={state.trends} />
            </div>
          </div>
        ) : (
          <div className="empty text-center">
            {!state.loading && (
              <h4>Please enter Country Name and hit Submit</h4>
            )}
          </div>
        )}
      </div>
      <div className="circle-small-4 br-50 pos-abs"></div>
      <div className="circle-small-5 br-50 pos-abs"></div>
      <div className="circle-small-2 br-50 pos-abs"></div>
    </div>
  );
};

export default CountryList;
