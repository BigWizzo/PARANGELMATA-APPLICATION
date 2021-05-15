import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

function App() {
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
  return (
    <div className="App">
      <h1>Parangelmata</h1>
      <Line data={data} />
    </div>
  );
}

export default App;
