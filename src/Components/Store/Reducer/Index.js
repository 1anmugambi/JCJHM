import { combineReducers } from "redux";

import searchArticle from "..Reducer/SearchArticle";

const reducer = combineReducers({
  search: searchArticle,
});

export default reducer;