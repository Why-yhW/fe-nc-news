import { fetchCommentsByArticleId } from "./apiCall";
import { useState, useEffect } from "react";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(props.articleId).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [props]);

  if (isLoading) {
    return <h2>Comments Loading...</h2>;
  }

  return (
    <section className="comments">
      <h2>Comments</h2>
      {comments.map((comment) => {
        const articleDate = new Date(comment.created_at).toLocaleDateString(
          "en-GB"
        );
        return (
          <div className="comment_card" key={comment.comment_id}>
            <h4 className="comment_card_internal">Author: {comment.author}</h4>
            <h5 className="comment_card_internal">Created at: {articleDate}</h5>
            <p className="comment_card_internal">Comment: {comment.body}</p>
            <h6 className="comment_card_internal">Votes: {comment.votes}</h6>
          </div>
        );
      })}
    </section>
  );
}

export default Comments;
