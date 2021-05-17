/* eslint-disable array-callback-return */
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
        if (currentCountry.toLowerCase() === nation.toLowerCase()) {
          Object.keys(country).forEach((key) => {
            myLabels.push(key);
          });
          Object.values(country).forEach((value) => {
            myData.push(value);
          });
          countryLabel.push(currentCountry);
        }
      });

      const data = myData.slice(41, 61);
      const labels = myLabels.slice(41, 61);
      const label = countryLabel.toString();
      const natCode = myData.slice(62, 63).toString();
      const yr1 = myLabels.slice(59, 60).toString();
      const yr2 = myLabels.slice(60, 61).toString();
      let yr1Val = parseInt(myData.slice(59, 60));
      let yr2Val = parseInt(myData.slice(60, 61));

      if (isNaN(yr1Val) === true) {
        yr1Val = 'no recorded';
      }

      if (isNaN(yr2Val) === true) {
        yr2Val = 'no recorded';
      }

      const status = () => {
        if (yr1Val === yr2Val) {
          return 'no change';
        } else if (yr1Val < yr2Val) {
          return 'a decrease';
        } else {
          return 'an increase';
        }
      };

      dispatch({
        type: 'SUCCESS_LIVESTOCK',
        payload: {
          data,
          labels,
          label,
          natCode,
          status,
          yr1,
          yr2,
          yr1Val,
          yr2Val,
        },
      });
    } catch (error) {
      dispatch({
        type: 'REJECTED_LIVESTOCK',
      });
    }
  };
};
