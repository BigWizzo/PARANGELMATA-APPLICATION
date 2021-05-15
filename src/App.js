import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getData } from './redux/actions/livestockActions';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.livestock);
  const [nat, setNat] = useState('');
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
      <input
        type="text"
        placeholder="Enter Country"
        onChange={(e) => setNat(e.target.value)}
      />
      <div className="tog">
        <button type="button" onClick={() => fetchData()}>
          Submit
        </button>
      </div>
      {state.loading && <p>Loading...</p>}
      <div className="chart-wrapper">
        <Bar data={state.data} />
      </div>
    </div>
  );
}

export default App;
