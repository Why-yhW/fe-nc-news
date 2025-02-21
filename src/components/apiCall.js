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

export const fetchCommentsByArticleId = (article_id) => {
  return apiLink
    .get("/articles/" + article_id + "/comments")
    .then(({ data: { comments: commentsData } }) => {
      return commentsData;
    });
};

export const patchArticleVotes = (params) => {
  return apiLink
    .patch("/articles/" + params.article_id, { inc_votes: `${params.vote}` })
    .then(
      ({
        data: {
          article: { votes: voteData },
        },
      }) => {
        return voteData;
      }
    );
};

export const postNewCommentByArticleId = (params) => {
  return apiLink
    .post("/articles/" + params.article_id + "/comments", {
      username: params.username,
      body: params.body,
    })
    .then((data) => {
      console.log(data);
    });
};
