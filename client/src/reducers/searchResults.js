const initialState = [];

export default function searchResultsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "findResults": {
      return {
        results: payload,
      };
    }
    default:
      return state;
  }
}
