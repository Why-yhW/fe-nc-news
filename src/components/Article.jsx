import { fetchArticlesById, fetchCommentsByArticleId } from "./apiCall";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Article() {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(params)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .then(() => {
        return fetchCommentsByArticleId(params);
      })
      .then((commentsData) => {
        setComments(commentsData);
      });
  }, [params]);

  if (isLoading) {
    return <h2>Articles Loading...</h2>;
  }

  const articleDate = new Date(article.created_at).toLocaleDateString("en-GB");

  return (
    <>
      <h2>Article</h2>
      <section className="article">
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt="" />
        <h4>
          Votes: {article.votes} Comments: {article.comment_count}
        </h4>
        <h4>Topic: {article.topic}</h4>
        <h5>{article.body}</h5>
        <h6>Author: {article.author}</h6>
        <h6>Created at: {articleDate}</h6>
      </section>
      <section className="comments">
        <h2>Comments</h2>
        {comments.map((comment) => {
          const articleDate = new Date(comment.created_at).toLocaleDateString(
            "en-GB"
          );
          return (
            <div className="comment_card" key={comment.comment_id}>
              <h4 className="comment_card_internal">
                Author: {comment.author}
              </h4>
              <h5 className="comment_card_internal">
                Created at: {articleDate}
              </h5>
              <p className="comment_card_internal">Comment: {comment.body}</p>
              <h6 className="comment_card_internal">Votes: {comment.votes}</h6>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Article;
