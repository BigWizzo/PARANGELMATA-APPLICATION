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
      const indCode = myData.slice(64).toString();
      const indName = myData.slice(63).toString();
      const natCode = myData.slice(62).toString();

      console.log(indCode);
      console.log(indName);
      console.log(natCode);

      dispatch({
        type: 'SUCCESS_LIVESTOCK',
        payload: { data, labels, label, indCode, indName, natCode },
      });
    } catch (error) {
      dispatch({
        type: 'REJECTED_LIVESTOCK',
      });
    }
  };
};
