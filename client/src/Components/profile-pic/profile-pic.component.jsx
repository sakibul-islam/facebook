import './profile-pic.styles.scss';
import { withRouter } from 'react-router-dom';

const ProfilePic = ({photoURL, userName, history}) => {
  return (
    <div className='profile-pic'
      onClick={() => history.push(userName ? `/profile/${userName}` : `/profile`)}>
      {photoURL ? <img src={photoURL} alt='' /> : null}
    </div>
  )
}

export default withRouter(ProfilePic);