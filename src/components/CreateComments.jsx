import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { postNewCommentByArticleId } from "./apiCall";

function CreateComment(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [newCommentDisplay, setNewCommentDisplay] = useState(
    props.newCommentDisplay
  );
  const [newComments, setNewComments] = useState([]);

  if (newCommentDisplay != props.newCommentDisplay) {
    setNewCommentDisplay(props.newCommentDisplay);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNewCommentDisplay(false);
    setIsLoading(true);
    postNewCommentByArticleId({
      username: "grumpy19",
      body: e.target[0].value,
    }).then(() => {});
  }

  if (isLoading)
    return (
      <h3 className="loading_symbol">
        <AiOutlineLoading />
      </h3>
    );

  return (
    <form
      hidden={newCommentDisplay}
      id="create_comment"
      onSubmit={handleSubmit}
    >
      <label htmlFor="new_comment">New Comment: </label>
      <input
        type="text"
        id="new_comment"
        placeholder="Max of 500 Characters"
        maxLength="500"
      />
      <input type="submit" value="Submit" disabled={newCommentDisplay} />
    </form>
  );
}

export default CreateComment;
