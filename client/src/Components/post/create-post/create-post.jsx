import CreatePostPreview from '../create-post-preview/create-post-preview.component';
import CreatePostModal from "../create-post-modal/create-post-modal.component";
import { useState } from 'react';

const CreatePost = () => {
  const [modal, setModal] = useState(false)
	return (
		<>
			<CreatePostPreview setModal={setModal}/>
			{
        modal ? <CreatePostModal setModal={setModal} /> : ''
      }
		</>
	);
};

export default CreatePost;
