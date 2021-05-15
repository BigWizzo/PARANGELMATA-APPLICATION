const initialState = {
  loading: false,
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
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
        labels: [],
        datasets: [
          {
            label: '# of Votes',
            data: [],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      };
    default:
      break;
  }
  return state;
};

export default livestockReducer;
