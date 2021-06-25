import ProfilePic from '../../profile-pic/profile-pic.component';
import './show-comment.styles.scss';
import Name from '../../name/name.component';

const Comment = ({user, body, time}) => (
  <div className='comment'>
    <ProfilePic photoURL={user.photoURL} />
    <div className='container'>
      <div className='body'>
        <Name userName={user.userName} displayName={user.displayName} />
        {body}
      </div>
      <div className='actions'>
        <span className='link'>Like</span>
        <span className='link'>Reply</span>
        <span className='time'>{time}</span>
      </div>
    </div>
  </div>
);

export default Comment;