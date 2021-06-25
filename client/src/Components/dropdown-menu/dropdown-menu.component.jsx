import CurrentUsersProfilePic from "../current-user/current-users-profile-pic/current-users-profile-pic.component";
import CurrentUsersName from '../current-user/current-users-name/current-users-name.component';
import './dropdown-menu.styles.scss';
import IconContainer from "../top-nav/icon-container/icon-container.component";

import { connect } from "react-redux";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { DarkModeIcon, GunIcon, HelpSupportIcon, SettingIcon, LogOutIcon, SignInIcon } from "../icons/icons";

import { addGunInAnimation, addGunOutAnimation, removeGunInAnimation, removeGunOutAnimation, toggleGunMode } from "../../redux/gun/gun.actions";
import { Component } from "react";
import { OhNo } from "../gifs/gif";


class DropdownMenu extends Component {

  state = {
    ohNo: false
  }
  
  handleGunModeToggle = () => {
    const {gunMode, toggleGunMode, addGunInAnimation, removeGunInAnimation, addGunOutAnimation, removeGunOutAnimation } = this.props;
    
    if(!gunMode) {
      addGunInAnimation();
      toggleGunMode();
      this.setState({ohNo: true})
      setTimeout(() => removeGunInAnimation(), 300);
      setTimeout(() => this.setState({ohNo: false}), 2000);
    } else {
      addGunOutAnimation();
      setTimeout(() => {
        removeGunOutAnimation();
        toggleGunMode();  
      }, 200);
    }
    
  }

  render() {
    const {user, gunMode } = this.props;
    const {ohNo} = this.state;

    return (
      <div className='dropdown-menu'>
        {
          user.email ? (
          <div className='item profile'>
            <CurrentUsersProfilePic />
            <div className='other'>
              <CurrentUsersName className='name'/>
              <span className='message'>See you profile</span>
            </div>
          </div>
          ) : (
            <div className='item signin' onClick={() => signInWithGoogle()}>
              <IconContainer>
                <SignInIcon />
              </IconContainer>
              <div className='other'>
                <span className='name'>Sign In With Google</span>
                <span className='message'>Get Free Verified Account</span>
              </div>
            </div>
          )
        }
        
        <hr/>

        <div className={`item ${gunMode ? "on" : ''}`} onClick={this.handleGunModeToggle}>
          <IconContainer>
            <GunIcon/>
          </IconContainer>
          <div className='other'>
            <span className='name'>Reactor Gun</span>
            <span className='message'></span>
          </div>
        </div>

        {
          ohNo ? (
          <div className='item oh-no'>
            <OhNo/>
          </div>
          ) : null
        }
        
        <div className='item' >
          <IconContainer>
            <SettingIcon/>
          </IconContainer>
          <div className='other'>
            <span className='name'>Settings & Privacy</span>
          </div>
        </div>
        <div className='item' >
          <IconContainer>
            <HelpSupportIcon/>
          </IconContainer>
          <div className='other'>
            <span className='name'>Help & Support</span>
          </div>
        </div>
        <div className='item' >
          <IconContainer>
            <DarkModeIcon/>
          </IconContainer>
          <div className='other'>
            <span className='name'>Display & Accessibility</span>
          </div>
        </div>

        {
          user.displayName ? (
            <div className='item' onClick={() => auth.signOut()} >
              <IconContainer>
                <LogOutIcon />
              </IconContainer>
              <div className='other'>
                <span className='name'>Log Out</span>
              </div>
            </div>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({user, gun}) => ({
  user, 
  gunMode: gun.gunMode
})
const mapDispatchToProps = (dispatch) => ({
  toggleGunMode: () => dispatch(toggleGunMode()),
  addGunInAnimation: () => dispatch(addGunInAnimation()),
  removeGunInAnimation: () => dispatch(removeGunInAnimation()),
  addGunOutAnimation: () => dispatch(addGunOutAnimation()),
  removeGunOutAnimation: () => dispatch(removeGunOutAnimation())
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);