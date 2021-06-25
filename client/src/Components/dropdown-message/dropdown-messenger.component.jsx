import ProfilePic from '../profile-pic/profile-pic.component';
import './dropdown-messenger.styles.scss';
import { ThreeDotsIcon } from '../icons/icons';
import TextInput from '../text-input/text-input.component';
// import { sakib } from "../../profilesObj";

const DropdownMessenger = () => (
  <div className='dropdown-messenger'>
    <div className='header'>
      <span className='header-name'>Messenger</span>
      <span className='controls'>
        <span className='menu'>
          <ThreeDotsIcon/>
        </span>
      </span>
    </div>
    <TextInput placeholder='Search Messenger' />
    <div className='conversations-container'>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Crush</span>
          <span className='last-message'>
            <span className='body'>Hi</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Ex</span>
          <span className='last-message'>
            <span className='body'>I miss you</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Facebook</span>
          <span className='last-message'>
            <span className='body'>Welcome to this Facebook</span>
            <span className='time'>3h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic photoURL={"https://lh3.googleusercontent.com/a-/AOh14GhBPYYIvX9VuKQh_4uiK0qLtyfvXneAGNP9cl0VGA=s96-c"}/>
        <div className='conversation'>
          <span className='name'>Sakibul Islam</span>
          <span className='last-message'>
            <span className='body'>This is just a demo messenger</span>
            <span className='time'>7h</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default DropdownMessenger;