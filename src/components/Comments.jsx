import { fetchCommentsByArticleId } from "./apiCall";
import { useState, useEffect } from "react";
import CreateComment from "./CreateComments";
import { getCurrentUser } from "./Home";
import DeletingComments from "./DeletingComment";

function Comments(props) {
  const currentUser = getCurrentUser();
  const [isDisabled, setIsDisabled] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(0);

  function forceReload() {
    setReload(reload + 1);
  }

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
      <button
        disabled={newCommentButton}
        className="create_new_comment"
        onClick={createComment}
        hidden={newCommentButton}
      >
        Create New Comment
      </button>
      <CreateComment
        newCommentDisplay={newCommentDisplay}
        articleId={props.articleId}
      />
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
    </section>
  );
}

export default Comments;
