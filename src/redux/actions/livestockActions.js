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

      const labels = [];
      const data = [];
      const label = '';

      response.data.map((country, index) => {
        const currentCountry = country['Country Name'];
        if (currentCountry === nation) {
          // console.log(currentCountry);
          // console.log(`this ${index} index`);
          Object.keys(country).forEach((key) => {
            // console.log(`this ${key} key`);
            labels.push(key);
          });
          Object.values(country).forEach((value) => {
            // console.log(`this ${value} key`);
            data.push(value);
          });
        }
      });
      // console.log(labels);
      console.log(data);
    } catch (error) {}
  };
};
