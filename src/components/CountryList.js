import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/livestockActions';
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
      <h1>Parangelmata</h1>
      <CountryForm onSub={fetchData} />
      <div>
        {state.loading && <p>Loading...</p>}
        {state.data.labels.length > 0 ? (
          <div className="chart-wrapper">
            <Bar data={state.data} />
          </div>
        ) : (
          <div className="empty">
            <h4>'Please enter The country and click on submit'</h4>
          </div>
        )}
      </div>
      <div className="country-desc">
        <CountryDescription desc={state.desc} trends={state.trends} />
      </div>
    </div>
  );
};

export default CountryList;
