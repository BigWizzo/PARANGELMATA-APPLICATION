import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

function App() {
  const [nation, setNation] = useState('South Africa');
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
  console.log(data);

  const loading = true;

  return (
    <div className="App">
      <h1>Parangelmata</h1>
      <input type="text" onChange={(e) => setNation(e.target.value)} />
      {loading && <p>Loading...</p>}
      <div className="chart-wrapper">
        <Line data={data} />
      </div>
    </div>
  );
}

export default App;
