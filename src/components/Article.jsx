import { fetchArticlesById } from "./apiCall";
import { useState, useEffect } from "react";
import { useSearchParams, Link, useParams } from "react-router";

function Article() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(params).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h3>Articles Loading...</h3>;
  }

  return (
    <>
      <h2>Article</h2>
      {console.log(article)}
      <section className="article">
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt="" />
        <h4>
          Votes: {article.votes} Comments: {article.comment_count}
        </h4>
        <h4>Topic: {article.topic}</h4>
        <p>{article.body}</p>
        <h4>Author: {article.author}</h4>
        <p>
          Created at: {new Date(article.created_at).toLocaleDateString("en-GB")}
        </p>
      </section>
    </>
  );
}

export default Article;
