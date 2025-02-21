import { RiDeleteBin5Line } from "react-icons/ri";
import { getCurrentUser } from "./Home";
import { deletingCommentUsingUser } from "./apiCall";
import { useState } from "react";
import { Link } from "react-router";

function DeletingComments(props) {
  const currentUser = getCurrentUser();
  const [isDisabled, setIsDisabled] = useState(false);
  const urlEnd = `/articles/${props.articleId}`;

  function deleteComment() {
    setIsDisabled(true);
    deletingCommentUsingUser({ comment_id: props.commentId }).then((data) => {
      if (data === 204) {
        return true;
      }
    });
  }

  if (currentUser === props.author) {
    return (
      <Link to={urlEnd}>
        <button
          className="delete_button"
          onClick={deleteComment}
          disabled={isDisabled}
        >
          <RiDeleteBin5Line />
        </button>
      </Link>
    );
  }
}

export default DeletingComments;
