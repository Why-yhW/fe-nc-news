import { fetchArticles } from "./apiCall";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(params).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h3>Articles Loading...</h3>;
  }

  return (
    <>
      <h2>Articles</h2>
      <section className="articles">
        {articles.map((article) => {
          const urlEnd = `/articles/${article.article_id}`;
          return (
            <Link to={urlEnd} key={article.article_id}>
              <button className="article_card">
                <h4>{article.title}</h4>
                <img src={article.article_img_url} alt="" />
                <p>Created at: {article.created_at.slice(0, 10)}</p>
                <h4>Author: {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
              </button>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default Articles;
