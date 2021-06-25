import { useState } from "react";
import { requestToGraphQl } from "../../../graphql/graphql";
import CurrentUsersProfilePic from "../../current-user/current-users-profile-pic/current-users-profile-pic.component";
import HoverButton from "../../hoverButton/hover-button.component";
import { SendIcon } from "../../icons/icons";
import "./write-comment.styles.scss";

const WriteComment = ({ postID, addCommentToState }) => {
	const [comment, setComment] = useState("");
	
  const submitComment = () => {
    if(!comment) return;
		const query = {
			query: `mutation($postID: String!, $userName: String!, $comment: String!) {
          addComment(postID: $postID, userName: $userName, comment: $comment ) {
            id
            comments {
              id
              user {
                displayName
                photoURL
                userName
              }
              body
            }
          }
        }`,
			variables: `{
          "postID": "${postID}",
          "userName": "undefined",
          "comment": ${JSON.stringify(comment)}
        }`,
		};
		requestToGraphQl(query).then((res) => {
			const comments = res.data.addComment.comments;
			const addedComment = comments[comments.length - 1];
			console.log(addedComment);
			addCommentToState(addedComment);
			setComment("");
		});
	};
	return (
		<div className="write-comment">
			<CurrentUsersProfilePic />
			<div className="input">
				<input
					type="text"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Write a comment..."
				/>
				<HoverButton className={`send-button hover-button ${comment? 'enable': 'disable'}`} onClick={submitComment}>
					<SendIcon />
				</HoverButton>
			</div>
		</div>
	);
};

export default WriteComment;
