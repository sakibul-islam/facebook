import './friend-request.styles.scss';

import HoverButton from '../hoverButton/hover-button.component';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import UserCard from '../user-card/user-card.component';

const FriendRequest = ({user, removeUser}) => {

  const [requestState, setRequestState] = useState({accepted: false});
  const { accepted } = requestState;

  const handleRequest = () => {
    setRequestState({accepted: !accepted})
  }

    const {photoURL, displayName, userName} = user;
    return (
      <UserCard photoURL={photoURL} displayName={displayName} userName={userName} removeUser={removeUser}>
        {
          !accepted
          ?  (
            <HoverButton 
              className='sent-request' 
              onClick={handleRequest}
              >
                Confrim Request
            </HoverButton>
          )
          :  (
            <HoverButton 
              className='accepted'
              >
                Added
            </HoverButton>
          )
        }
      </UserCard>
    )
};

export default withRouter(FriendRequest);