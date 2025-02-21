import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { postNewCommentByArticleId } from "./apiCall";
import { redirect, useNavigate } from "react-router";

function CreateComment(props) {
  const [newCommentButton, setNewCommentButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const urlEnd = `/articles/${props.articleId}`;

  function postComment(e) {
    postNewCommentByArticleId({
      article_id: props.articleId,
      username: "grumpy19",
      body: e.target[0].value,
    }).then((data) => {
      console.log(data);
      if (data.status === 201) {
        alert("Comment Posted!");
        window.location = urlEnd;
      }
    });
  }

  if (isLoading) {
    return (
      <h3 className="loading_symbol">
        <AiOutlineLoading />
      </h3>
    );
  }

  function handleSubmit(e) {
    setIsLoading(true);
    setIsHidden(true);
    postComment(e);
  }

  function createComment() {
    setNewCommentButton(true);
    setIsHidden(false);
  }

  return (
    <>
      <button
        disabled={newCommentButton}
        className="create_new_comment"
        onClick={createComment}
        hidden={newCommentButton}
      >
        Create New Comment
      </button>
      <form id="create_comment" onSubmit={handleSubmit} hidden={isHidden}>
        <label htmlFor="new_comment">New Comment: </label>
        <input
          type="text"
          id="new_comment"
          placeholder="Max of 500 Characters"
          maxLength="500"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CreateComment;
