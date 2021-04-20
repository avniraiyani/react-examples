import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE} from "./action_types";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case REMOVE_ARTICLE:
      return { ...state, articles:[...state.articles.filter((article)=>article.id!=action.payload)]};
    case UPDATE_ARTICLE:
      return {...state,articles:[...state.articles.map(item => {
        if (item.id !== action.payload.id) {
            return item;
        } else {
            return action.payload;
        }
      })]}
    default:
      return state;
  }
};
export default rootReducer;