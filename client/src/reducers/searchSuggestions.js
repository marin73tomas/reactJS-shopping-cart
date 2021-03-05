const initialState = [
  {
    id: 2,
    title: "test",
  },
];

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
