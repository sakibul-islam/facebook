import './user-card.styles.scss';
import { withRouter } from "react-router-dom";
import { CrossIcon } from "../icons/icons";

const UserCard = ({displayName, photoURL, userName, removeUser, children, history}) => (
  <div className='user-card'>
    <div 
      className='photo' 
      style={{backgroundImage: `url(${photoURL})`}}
      onClick={() => history.push(`/profile/${userName}`)}
    >
      <span className='remove-btn' onClick={
        (e) => {
          e.stopPropagation();
          removeUser(userName);
        }
      }>
        <CrossIcon />
      </span>
    </div>
    <div className='other'>
      <div className='name'>{displayName}</div>
      {children}
    </div>
  </div>
);

export default withRouter(UserCard);