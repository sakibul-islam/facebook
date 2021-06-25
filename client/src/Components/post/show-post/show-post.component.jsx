import "./show-post.styles.scss";

import Card from "../../Card/card.component";
import ProfilePic from "../../profile-pic/profile-pic.component";
// import  meme from './memes.jpg';
import HoverButton from "../../hoverButton/hover-button.component";
import WriteComment from "../../comment/write-comment/write-comment.component";
import Comment from "../../comment/show-comment/show-comment.componet";
import Name from "../../name/name.component";
import { CommentIcon, ShareIcon, ThreeDotsIcon } from "../../icons/icons";
import { Component } from "react";
import { connect } from "react-redux";
import { gunTrigger, gunTriggeredDone } from "../../../redux/gun/gun.actions";

import ReactionBox from "../../reaction-box/reaction-box";
import SortedReactions from "../../reaction-box/sorted-reactions";
import ReactionWithName from "../../reaction-box/reaction-with-name";

class ShowPost extends Component {
	state = {
		reacted: "",
		totalReact: 7,
		like: 7,
		haha: 0,
		love: 0,
		wow: 0,
		care: 0,
		sad: 0,
		angry: 0,
		reactionBox: false,
		comments: []
	};

	componentDidMount() {
		const {reactions, comments } = this.props.post
		const {
			like,
			haha,
			love,
			wow,
			care,
			sad,
			angry,
		} = reactions;
		this.setState({
			like,
			haha,
			love,
			wow,
			care,
			sad,
			angry,
			totalReact: like + haha + love + wow + care + sad + angry,
			comments
		});
	}

	reactToAddFn = (reactName) => {
		const { trigger, gunMode } = this.props.gun;
		const { reacted } = this.state;

		if (gunMode) {
			return trigger;
		} else if (reacted === reactName) {
			return -1;
		} else if (!reacted) {
			return 1;
		} else {
			return 0;
		}
	};

	sortReactions = () => {
		const { like, haha, love, wow, care, sad, angry } = this.state;
		const reactionObj = { like, haha, love, wow, care, sad, angry };
		const reactionArr = Object.keys(reactionObj);
		let done = false;
		while (!done) {
			done = true;
			for (let i = 1; i < reactionArr.length; i += 1) {
				if (reactionObj[reactionArr[i - 1]] < reactionObj[reactionArr[i]]) {
					done = false;
					let tmp = reactionArr[i - 1];
					reactionArr[i - 1] = reactionArr[i];
					reactionArr[i] = tmp;
				}
			}
		}

		return reactionArr.filter(
			(reaction, i) => i < 3 && reactionObj[reaction] > 0
		);
	};

	reactionIncressingQueue = async (quantity) => {
		let i = 0;
		while (i < quantity) {
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve("done");
				}, 80)
			);
			this.setState((prevState) => ({ totalReact: prevState.totalReact + 1 }));
			i++;
		}
	};

	toggleReact = (reactName) => {
		const { gunMode } = this.props.gun;
		const { reacted } = this.state;
		const reactToAdd = this.reactToAddFn(reactName);

		if (reactToAdd > 1) {
			this.reactionIncressingQueue(reactToAdd);
		} else {
			this.setState((prevState) => ({
				totalReact: prevState.totalReact + reactToAdd,
			}));
		}

		this.setState((prevState) => ({
			[reactName]: prevState[reactName] + reactToAdd,
		}));

		if (gunMode) {
			this.setGunAnimation();
			this.props.gunTrigger();
			setTimeout(() => this.props.gunTriggeredDone(), 500);
		}

		this.setState({
			reacted: gunMode ? reactName : reacted === reactName ? "" : reactName,
		});
	};

	addCommentToState = (comment) => {
		this.setState({comments: [...this.state.comments, comment]})
	}

	setGunAnimation = () => {
		this.setState({ gunAnimation: "gunAnimation" });

		setTimeout(() => {
			this.setState({ gunAnimation: "" });
		}, 500);
	};

	render() {
		const { reacted, totalReact, reactionBox } = this.state;
		const { post, gun } = this.props;
		const { displayName, userName } = post.user;
		const { body, shares, time, id } = post;
		//comments have stored in the state
		const comments = this.state.comments;
		const ParsedTime = new Date(Number(time)).toLocaleDateString();
		const { caption } = body;
		const reactBtnClasses = `hover-button ${gun.gunMode ? "gun-mode" : ""} ${
			this.state.gunAnimation
		}`;

		return (
			<div className="post">
				<Card>
					<div className="post-header">
						<div className="left">
							<ProfilePic userName={userName} photoURL={post.user.photoURL} />
							<div className="details">
								<span className="names">
									<Name displayName={displayName} userName={userName} />
									{/* ❯ <span className='group-name'>Group's Name</span> */}
								</span>
								<span className="time">{ParsedTime}</span>
							</div>
						</div>
						<div className="right">
							<ThreeDotsIcon className="dots" />
						</div>
					</div>
					{caption ? <div className="caption">{caption}</div> : null}
					{body.photoURL ? <img src={body.photoURL} alt="" /> : null}
					{body.videoURL ? <video src={body.videoURL} controls></video> : null}

					{totalReact || comments.length || shares ? (
						<div className="quantities">
							<div className="left">
								{totalReact > 0 ? (
									<>
										<SortedReactions reactionsArr={this.sortReactions()} />
										<span className="quantity link">{totalReact}</span>
									</>
								) : (
									""
								)}
							</div>
							<div className="right">
								{comments.length ? (
									<div className="link">
										<span className="quantity">{comments.length}</span>
										<span>Comments</span>
									</div>
								) : null}
								{shares ? (
									<div className="shares link">
										<span className="quantity">{shares}</span>
										<span>Shares</span>
									</div>
								) : null}
							</div>
						</div>
					) : (
						""
					)}
					<div className="actions">
						<HoverButton
							onMouseOver={() => this.setState({ reactionBox: true })}
							onClick={() => this.toggleReact("like")}
							className={reactBtnClasses}
						>
							<ReactionWithName reacted={reacted} />
							{reactionBox ? (
								<ReactionBox toggleReact={this.toggleReact} />
							) : null}
						</HoverButton>
						<HoverButton>
							<div className="icon-container">
								<CommentIcon className="icon" />
							</div>
							<span>Comment</span>
						</HoverButton>
						<HoverButton>
							<div className="icon-container">
								<ShareIcon className="icon" />
							</div>
							<span>Share</span>
						</HoverButton>
					</div>
					<div className="comments">
						{comments.map((comment) => (
							<Comment key={comment.id} {...comment} />
						))}
					</div>
					<WriteComment postID={id} addCommentToState={this.addCommentToState}/>
				</Card>
			</div>
		);
	}
}

const mapStatetoProps = ({ gun }) => ({
	gun,
});
const mapDispatchToProps = (dispatch) => ({
	gunTrigger: () => dispatch(gunTrigger()),
	gunTriggeredDone: () => dispatch(gunTriggeredDone()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ShowPost);
