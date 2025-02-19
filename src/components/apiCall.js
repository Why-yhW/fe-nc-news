import axios, { isCancel, AxiosError } from "axios";

const apiLink = axios.create({
  baseURL: "https://first-project-my3j.onrender.com/api",
});

export const fetchArticles = (params) => {
  return apiLink
    .get("/articles")
    .then(({ data: { articles: articlesData } }) => {
      return articlesData;
    });
};

export const fetchArticlesById = ({ article_id }) => {
  return apiLink
    .get("/articles/" + article_id)
    .then(({ data: { article: articlesData } }) => {
      return articlesData;
    });
};
