import { useState } from "react";
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownThick,
  TiArrowDownOutline,
} from "react-icons/ti";
import { patchArticleVotes } from "./apiCall";

function Votes(params) {
  const [currentVote, setCurrentVote] = useState(params.vote);
  const [voteUpDisplay, setVoteUpDisplay] = useState(<TiArrowUpOutline />);
  const [voteDownDisplay, setVoteDownDisplay] = useState(
    <TiArrowDownOutline />
  );
  const [disabled, setDisabled] = useState(false);

  function upHandleHover() {
    return setVoteUpDisplay(<TiArrowUpThick />);
  }

  function upNoHover() {
    return setVoteUpDisplay(<TiArrowUpOutline />);
  }

  function downHandleHover() {
    return setVoteDownDisplay(<TiArrowDownThick />);
  }

  function downNoHover() {
    return setVoteDownDisplay(<TiArrowDownOutline />);
  }

  function voteUp() {
    setDisabled(true);
    patchArticleVotes({ vote: 1, article_id: params.articleId }).then(
      (newVote) => {
        setCurrentVote(newVote);
        setDisabled(false);
      }
    );
  }

  function voteDown() {
    setDisabled(true);
    patchArticleVotes({ vote: -1, article_id: params.articleId }).then(
      (newVote) => {
        setCurrentVote(newVote);
        setDisabled(false);
      }
    );
  }

  return (
    <dir className="votes">
      <h5 className="comment_card_internal">Votes: {currentVote}</h5>
      <button
        className="vote_button_up"
        disabled={disabled}
        onMouseOver={upHandleHover}
        onMouseLeave={upNoHover}
        onClick={voteUp}
      >
        {voteUpDisplay}
      </button>
      <button
        className="vote_button_down"
        disabled={disabled}
        onMouseOver={downHandleHover}
        onMouseLeave={downNoHover}
        onClick={voteDown}
      >
        {voteDownDisplay}
      </button>
    </dir>
  );
}

export default Votes;
