const initialState = [];

export default function searchSuggestionsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "findSuggestions": {
      return [
        {
          id: 1,
          title: "findSuggestions",
        },
      ];
    }

    default:
      return state;
  }
}
