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
      // for (let i = 0; i < response.data.length; i++) {
      // console.log(response.data[i]['Country Name']);
      // }

      response.data.map((country, index) => {
        const currentCountry = country['Country Name'];
        if (currentCountry === nation) {
          console.log(currentCountry);
          console.log(`this ${index} is`);
        }
      });
    } catch (error) {}
  };
};
