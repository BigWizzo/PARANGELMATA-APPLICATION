const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: ['rgba(0, 128, 0, 0.5)'],
        borderColor: ['rgb(0, 128, 0)'],
        borderWidth: 1,
      },
    ],
  },
  desc: {
    label: '',
    countryCode: '',
  },
  trends: {
    yearOne: '',
    yearTwo: '',
    currentStatus: '',
    yearOneVal: '',
    yearTwoVal: '',
  },
};

const livestockReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'AWAITING_LIVESTOCK':
      return {
        ...state,
        loading: true,
      };
    case 'REJECTED_LIVESTOCK':
      return {
        ...state,
        loading: false,
      };
    case 'SUCCESS_LIVESTOCK':
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: payload.label,
              data: payload.data,
              backgroundColor: ['rgba(0, 128, 0, 0.5)'],
              borderColor: ['rgb(0, 128, 0)'],
              borderWidth: 1,
            },
          ],
        },
        desc: {
          label: payload.label,
          countryCode: payload.natCode,
        },
        trends: {
          yearOne: payload.yr1,
          yearTwo: payload.yr2,
          currentStatus: payload.status(),
          yearOneVal: payload.yr1Val,
          yearTwoVal: payload.yr2Val,
        },
      };
    default:
      break;
  }
  return state;
};

export default livestockReducer;
