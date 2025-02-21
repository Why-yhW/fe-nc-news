import { fetchCommentsByArticleId } from "./apiCall";
import { useState, useEffect } from "react";
import DeletingComments from "./DeletingComment";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newCommentButton, setNewCommentButton] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(props.articleId).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [props]);

  function getIsHidden() {
    return newCommentButton;
  }

  if (isLoading) {
    return <h2>Comments Loading...</h2>;
  }

  return (
    <>
      {comments.map((comment) => {
        const articleDate = new Date(comment.created_at).toLocaleDateString(
          "en-GB"
        );

        return (
          <div className="comment_card" key={comment.comment_id}>
            <div className="flex">
              <h4 className="comment_card_internal">
                Author: {comment.author}
              </h4>
              {
                <DeletingComments
                  author={comment.author}
                  commentId={comment.comment_id}
                  articleId={props.articleId}
                />
              }
            </div>
            <h5 className="comment_card_internal">Created at: {articleDate}</h5>
            <p className="comment_card_internal">Comment: {comment.body}</p>
            <h5 className="comment_card_internal">Votes: {comment.votes}</h5>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
