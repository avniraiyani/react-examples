
import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE } from "./action_types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const removeArticle = articleId => ({ type: REMOVE_ARTICLE, payload: articleId });
export const updateArticle = articleId => ({ type: UPDATE_ARTICLE, payload: articleId });