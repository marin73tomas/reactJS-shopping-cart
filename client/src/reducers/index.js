import { combineReducers } from "redux";
import searchResultsReducer from "./searchResults";
import searchSuggestionsReducer from "./searchSuggestions";
import currentItemReducer from "./currentItem";

export default combineReducers({
  searchResultsReducer,
  searchSuggestionsReducer,
  currentItemReducer,
});
