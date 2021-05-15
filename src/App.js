import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getData } from './redux/actions/livestockActions';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.livestock);
  const [nat, setNat] = useState('South Africa');
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 31],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  const fetchData = () => {
    dispatch(
      getData({
        nation: nat,
      }),
    );
  };

  return (
    <div className="App">
      <h1>Parangelmata</h1>
      <input type="text" onChange={(e) => setNat(e.target.value)} />
      <div className="tog">
        <button type="button" onClick={() => fetchData()}>
          Submit
        </button>
      </div>
      {state.loading && <p>Loading...</p>}
      <div className="chart-wrapper">
        <Line data={data} />
      </div>
    </div>
  );
}

export default App;
