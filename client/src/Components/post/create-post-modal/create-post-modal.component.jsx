import { connect } from "react-redux";
import { useContext, useState } from "react";
import "./create-post-modal.styles.scss";
// import { requestToGraphQl } from "../../../graphql/graphql";
// import PostsContext from "../../../contexts/posts.context";
import ProfilePic from "../../profile-pic/profile-pic.component";
import {
	CrossIcon,
	EarthIcon,
	FeelingActivityIcon,
	LiveVideoIcon,
	PhotoVideoIcon,
} from "../../icons/icons";
import Name from "../../name/name.component";

const CreatePostModal = ({ userName, photoURL, displayName, setModal }) => {
	const [caption, setCaption] = useState("");
	const [photo, setPhoto] = useState("");
	// const { posts, setPosts } = useContext(PostsContext);

	const handleChange = (event) => {
		switch (event.target.name) {
			case "caption":
				setCaption(event.target.value);
				console.log(caption);
				break;
			case "photo":
				console.log(event.target.files[0]);
				setPhoto(event.target.files[0]);
				console.log(photo);
				// const reader = new FileReader();
				// reader.readAsDataURL(event.target.files[0]);
				// reader.onloadend = () => {
				//   console.log(reader.result)
				//   console.log(btoa(reader.result))
				// }
				break;
			default:
				console.log("switch");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//graphql

		// console.log({caption, userName})
		// const query = {
		// 	query: `mutation($userName: String!, $caption: String!) {
		//     addPost(userName: $userName, caption: $caption ) {
		//       id
		//       user {
		//         userName
		//         displayName
		//         photoURL
		//       }
		//       body {
		//         caption
		//         photoURL
		//       }
		//       time
		//       reactions {
		//         like
		//         haha
		//         wow
		//         love
		//         sad
		//         care
		//         angry
		//       }
		//       comments {
		//         id
		//         user {
		//           displayName
		//           photoURL
		//           userName
		//         }
		//         body
		//       }
		//     }
		//   }`,
		// 	variables: `{
		//     "userName": "${userName}",
		//     "caption": ${JSON.stringify(caption)}
		//   }`,
		// };

		// requestToGraphQl(query).then((result) => {
		// 	const post = result.data.addPost;
		//   console.log(post)
		// 	setPosts([post, ...posts]);
		//   setCaption("");
		// 	setModal(false);
		// }).catch(err => {
		//   console.log(err)
		//   setCaption("Opps, something went wrong...")
		//   setTimeout(() => {
		//     setCaption("");
		//     setModal(false);
		//   }, 1000)
		// })

		const formData = new FormData();
		formData.append("userName", userName);
		formData.append("caption", caption);
		formData.append("photo", photo);
		fetch("/post/new", {
			method: "POST",
			headers: {
				Accept: "application/json, application/xml, text/plain, text/html, *.*",
			},
			body: formData,
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
				if(res.failed) {
					alert(res.message)
				}
				if(res.post) {
					// setPosts([res.post, ...posts])

				}
			})
			.catch(error => {
				alert(error);
				console.log(error)
			})
			setModal(false);
	};

	const hideModla = (event) => {
		if (event.target.className === "post-modal-container") setModal(false);
	};
	return (
		<div className="post-modal-container" onClick={hideModla}>
			<div className="post-modal">
				<form onSubmit={handleSubmit}>
					<div className="header">
						<h2>Create Post</h2>
						<div className="close-btn" onClick={() => setModal(false)}>
							<CrossIcon />
						</div>
						<hr />
					</div>
					<div className="owner">
						<div className="left">
							<ProfilePic photoURL={photoURL} />
							<div className="right">
								<Name displayName={displayName} />
								<div className="privacy">
									<EarthIcon className="icon" />
									<span>Public</span>
								</div>
							</div>
						</div>
					</div>
					<textarea
						className="caption"
						name="caption"
						value={caption}
						onChange={handleChange}
						placeholder="What's on your mind?"
					/>
          {
            photo && photo.type.match("image") ? <img src={URL.createObjectURL(photo)} height='50' alt=''/> : null
          }
					{
						photo && photo.type.match("video") ? <video src={URL.createObjectURL(photo)} height='50'></video> : null
					}
					<div className="media">
						<label htmlFor="" className="hover-button">
							<LiveVideoIcon className="icon" />
							<span className="btn-name">Live Video</span>
						</label>
						<label htmlFor="photo" className="hover-button">
							<PhotoVideoIcon className="icon" />
							<span className="btn-name">Photo/Video</span>
							<input
								id="photo"
								name="photo"
								type="file"
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="" className="hover-button">
							<FeelingActivityIcon className="icon" />
							<span className="btn-name">Feeling/Activity</span>
						</label>
					</div>
					<input
						className="post-btn"
						disabled={caption || photo ? false : true}
						type="submit"
						value="Post"
					/>
					{/* <img src={}/> */}
				</form>
			</div>
		</div>
	);
};

const mapDispatchToProps = ({ user: { userName, displayName, photoURL } }) => ({
	userName,
	displayName,
	photoURL,
});

export default connect(mapDispatchToProps)(CreatePostModal);
