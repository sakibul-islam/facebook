import ProfilePic from '../profile-pic/profile-pic.component';
import './dropdown-notification.styles.scss';
import { ThreeDotsIcon } from '../icons/icons';
// import {sakib} from '../../profilesObj';

const DropdownNotification = () => (
  <div className='dropdown-notification'>
    <div className='header h-sb'>
      <span className='header-name'>Notifications</span>
      <span className='menu'>
        <ThreeDotsIcon/>
      </span>   
    </div>
    <div className='notifications-container'>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>
            <span className='link'>Your Crush</span>
            visited you profile 3 times today
          </div>
          <span className='time'>2 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>
            <span className='link'>Your Ex</span>
            reading your old message
          </div>
          <span className='time'>3 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>
            <span className='link'>Someone</span> and <span className='link'>7 others</span>
            viewed you post but didn't react
          </div>
          <span className='time'>5 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic photoURL={"https://lh3.googleusercontent.com/a-/AOh14GhBPYYIvX9VuKQh_4uiK0qLtyfvXneAGNP9cl0VGA=s96-c"}/>
        <div className='notification'>
          <div className='body'>
            <span className='link'>Sakibul Islam</span>
            deployed the app
          </div>
          <span className='time'>7 hours ago</span>
        </div>
      </div>
    </div>
  </div>
);

export default DropdownNotification;