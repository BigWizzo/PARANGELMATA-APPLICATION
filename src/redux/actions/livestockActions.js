import axios from 'axios';
export const getData = ({ nation }) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'AWAITING_LIVESTOCK',
      });
      const response = await axios.get(
        'https://anmlfarm.com/data/countrydata.json',
      );

      const myLabels = [];
      const myData = [];
      const countryLabel = [];

      response.data.map((country) => {
        const currentCountry = country['Country Name'];
        if (currentCountry === nation) {
          // console.log(currentCountry);
          // console.log(`this ${index} index`);
          Object.keys(country).forEach((key) => {
            // console.log(`this ${key} key`);
            myLabels.push(key);
          });
          Object.values(country).forEach((value) => {
            // console.log(`this ${value} key`);
            myData.push(value);
          });
          countryLabel.push(currentCountry);
        }
      });

      const data = myData.slice(41, 61);
      const labels = myLabels.slice(41, 61);
      const label = countryLabel.toString();

      console.log(data);
      console.log(labels);
      console.log(label);

      dispatch({
        type: 'SUCCESS_LIVESTOCK',
        payload: { data, labels, label },
      });
    } catch (error) {
      dispatch({
        type: 'REJECTED_LIVESTOCK',
      });
    }
  };
};
