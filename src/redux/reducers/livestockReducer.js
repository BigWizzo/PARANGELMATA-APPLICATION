const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  },
  desc: {
    indicatorCode: '',
    indicatorName: '',
    countryCode: '',
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
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
          ],
        },
        desc: {
          label: payload.label,
          indicatorCode: payload.indCode,
          indicatorName: payload.indName,
          countryCode: payload.natCode,
        },
      };
    default:
      break;
  }
  return state;
};

export default livestockReducer;
