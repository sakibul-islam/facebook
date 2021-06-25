import './friends.page.styles.scss'
import AddFriendsList from '../../Components/add-friends-list/add-friends-list.component';
import FriendRequestList from "../../Components/friend-request-list/friend-request-list.component";

const FriendsPage = () => (
  <div className='friends-page'>
    <FriendRequestList />
    <AddFriendsList />
  </div>
)

export default FriendsPage;