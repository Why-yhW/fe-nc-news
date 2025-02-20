import { fetchArticlesById } from "./apiCall";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Comments from "./Comments";
import Votes from "./Votes";

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
  }, [params]);

  if (isLoading) {
    return <h2>Article Loading...</h2>;
  }

  const articleDate = new Date(article.created_at).toLocaleDateString("en-GB");

  return (
    <>
      <h2>Article</h2>
      <section className="article">
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt="" />
        <h4> Comments: {article.comment_count}</h4>
        <h4>Topic: {article.topic}</h4>
        <h5>{article.body}</h5>
        <h6>Author: {article.author}</h6>
        <h6>Created at: {articleDate}</h6>
        <Votes vote={article.votes} articleId={params.article_id} />
      </section>
      <Comments articleId={params.article_id} />
    </>
  );
}

export default Article;
