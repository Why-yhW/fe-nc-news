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
