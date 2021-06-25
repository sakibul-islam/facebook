import ShowPost from "../post/show-post/show-post.component";
import "./contents.styles.scss";
import postArr from "../../posts";
import Gun from "../gun/gun.component";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { requestToGraphQl } from "../../graphql/graphql";
import CreatePost from "../post/create-post/create-post";
import PostsContext from "../../contexts/posts.context";
import { Skeleton } from "@material-ui/lab";
import Card from "../Card/card.component";

const Contents = ({ gun }) => {
	const [posts, setPosts] = useState(postArr);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		requestToGraphQl({
			query: `{
        posts {
          id
          user {
            userName
            displayName
            photoURL
          }
          body {
            caption
            photoURL
            videoURL
          }
          time
          reactions {
            like
            haha
            wow
            love
            sad
            care
            angry
          }
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
		}).then((result) => {
			console.log(result.data.posts);
			setPosts(result.data.posts);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className="contents">
			<PostsContext.Provider value={{ posts, setPosts }}>
				<CreatePost />
			</PostsContext.Provider>
			{isLoading ? (
				<div className="post">
					<Card>
						<div className="post-header">
							<div className="left">
								<Skeleton
									animation="wave"
									variant="circle"
									width={40}
									height={40}
								/>
								<div className="details">
									<span className="names">
										<Skeleton
											animation="wave"
											height={15}
											width="150px"
											style={{ marginBottom: 5 }}
										/>
									</span>
									<Skeleton
										animation="wave"
										height={15}
										width="40%"
										style={{ marginBottom: 5 }}
									/>
								</div>
							</div>
							<div className="right">
							</div>
						</div>
							<Skeleton
								animation="wave"
								variant="rect"
                height="100px"
							/>
          
						<div className="comments">
              <Skeleton/>
            </div>
						{/* <WriteComment postID={id} addCommentToState={this.addCommentToState}/> */}
					</Card>
				</div>
			) : (
				posts.map((post) => <ShowPost post={post} key={post.id} />)
			)}
			{gun.gunMode ? <Gun /> : ""}
		</div>
	);
};

const mapStatetoProps = ({ gun }) => ({
	gun,
});

export default connect(mapStatetoProps)(Contents);
