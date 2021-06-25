import { useEffect, useState } from "react";
import ShowPost from "../../Components/post/show-post/show-post.component";
import { requestToGraphQl } from "../../graphql/graphql";

const WatchPage = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		requestToGraphQl({
      query: `{
        videos {
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
    })
			.then((result) => {
        // console.log(result.data.videos);
        setVideos(result.data.videos)
      });
	}, []);

	return (
	<div className="watch-page">

		<div className='videos' style={{maxWidth: '600px', margin: 'auto'}}>
			{
				videos.map(video => <ShowPost key={video.id} post={video}/>)
			}
		</div>

	</div>
)};

export default WatchPage;
