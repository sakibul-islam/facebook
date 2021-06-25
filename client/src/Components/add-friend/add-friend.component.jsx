import './add-friend.styles.scss';
import { useState } from 'react';
import HoverButton from '../hoverButton/hover-button.component';
import { withRouter } from 'react-router-dom';
import UserCard from '../user-card/user-card.component';

//using hooks

const AddFriend = ({user, removeUser}) => {
  const [requestState, setRequestState] = useState({requested: false});
  const {requested} = requestState

  const handleRequest = () => {
    setRequestState({requested: !requested})
  }

    const {photoURL, displayName, userName} = user;
    return (
      <UserCard photoURL={photoURL} displayName={displayName} userName={userName} removeUser={removeUser}>
        {
          !requested
          ?  (
            <HoverButton 
              className='sent-request' 
              onClick={handleRequest}
              >
                Add Friend
            </HoverButton>
          )
          :  (
            <HoverButton 
              className='cancel-request'
              onClick={handleRequest}
              >
                Cancel Request
            </HoverButton>
          )
        }
      </UserCard>
    )
  
};

export default withRouter(AddFriend);