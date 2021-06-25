import TextInput from '../text-input/text-input.component';
import './top-nav.styles.scss';
import { ReactComponent as Logo} from './icons/logo.svg';
import { ReactComponent as SearchIcon} from './icons/search.svg';
import { ReactComponent as FriendsIcon} from './icons/Friends.svg';
import { ReactComponent as Home} from './icons/Home.svg';
import { ReactComponent as Watch} from './icons/Watch.svg';
import { ReactComponent as Groups} from './icons/Groups.svg';
import { ReactComponent as Bars} from './icons/Bars.svg';

import { ReactComponent as Plus} from './icons/Plus.svg';
import { ReactComponent as Messenger} from './icons/Messenger.svg';
import { ReactComponent as Bell} from './icons/Bell.svg';
import { ReactComponent as CaretDown} from './icons/caret-down.svg';

import CurrentUsersProfilePic from '../current-user/current-users-profile-pic/current-users-profile-pic.component';
import { withRouter } from 'react-router-dom';
import { Component, createRef } from 'react';

import { SmallDevice, LargeDevice, CustomMediaQuery } from '../responsive-rendering/responsive-rendering.component';

import TabContainer from './tab-container.component';
import DropdownNotification from '../dropdown-notification/dropdown-notification.component';
import DropdownMessenger from '../dropdown-message/dropdown-messenger.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';

class TopNav extends Component {
  state={
    activeTab: this.props.location.pathname || 'home',
    activeDropdownTab: '',
    updates: {
      Friends: 3,
      Messenger: 1,
      Notifications: 5
    }
  }

  setActiveTab = (tabName, routeName) => {
    this.handleTabClick(tabName);
    this.setState({activeTab: tabName})
    if(routeName) this.props.history.push(`${routeName}`)
  }
  setDropdownToggleTab = (tabName) => {
    this.handleTabClick(tabName)
    this.setState(prevState => ({
      activeDropdownTab: prevState.activeDropdownTab === tabName ? '' : tabName
    }));
    
  }

  handleTabClick = (tabName ) => {
    this.setState({updates: {
      ...this.state.updates,
      [tabName]: 0
    }})
  }

  dropdownRef = createRef();

  componentDidMount = () => {
    console.log("didmount")

    document.addEventListener('mousedown', (e) => {
      const rightButtons = document.querySelectorAll('.top-nav .right .hover-button');
      const buttons = [...rightButtons]
      const dropdownButtons = buttons.filter(btn => !btn.classList.contains('profile'));
      console.log(this.dropdownRef);
      if(this.dropdownRef) {
        if(!this.dropdownRef.current.contains(e.target)) {
          const check = dropdownButtons.find(button => {
            // console.log(button.contains(e.target));
            return button.contains(e.target);
          })
          // console.log(check);
          if(!check) this.setState({activeDropdownTab: ''});
        }
      }
      
      // console.log(e.target);
      // console.log(this.dropdownRef.current.contains(e.target));
    })
  }

  render() {
    console.log("render")
    const { activeTab, activeDropdownTab, updates} = this.state;
    const {setDisplayLeftNav} = this.props;
    const showDropdown = () => {
      switch(activeDropdownTab) {
        case 'Notifications':
          return <DropdownNotification />
        case 'Messenger':
          return <DropdownMessenger />
        case 'Menu':
          return <DropdownMenu />
        default: 
          return null
      }
    }

    return (
      <nav className='top-nav'>
        <div className='left'>
          <Logo className='logo' onClick={() => this.props.history.push('/')}/>
          <div className='search'>
            <SearchIcon className='icon' height='15px'/>
            <TextInput placeholder="Search on facebook"/>
          </div>
          
        </div>

        <SmallDevice>
          <div className='middle' style={{marginLeft: '0'}}>
          <TabContainer 
              bordered
              active={activeTab} 
              handleClick={this.setActiveTab}
              onClick={setDisplayLeftNav}
            >
              <Bars className='icon' />
            </TabContainer>
          </div>
        </SmallDevice>
        <LargeDevice>
          <div className='middle'>
            <TabContainer 
              tabName='Home'
              routeName='/'
              bordered
              active={activeTab} 
              handleClick={this.setActiveTab}
            >
              <Home className='icon' />
            </TabContainer>
            <TabContainer 
              tabName='Friends'
              routeName='/friends'
              bordered
              quantity={updates.Friends}
              active={activeTab} 
              handleClick={this.setActiveTab}
            >
              <FriendsIcon className='icon' />
            </TabContainer>
            <TabContainer 
              tabName='Watch'
              routeName='/watch'
              bordered
              active={activeTab} 
              handleClick={this.setActiveTab}
            >
              <Watch className='icon' />
            </TabContainer>
            <TabContainer 
              tabName='Groups'
              routeName='/groups'
              bordered
              active={activeTab} 
              handleClick={this.setActiveTab}
            >
              <Groups className='icon' />
            </TabContainer>
            <CustomMediaQuery maxWidth={1100}>
              <TabContainer 
                tabName=''
                bordered
                active={activeTab} 
                handleClick={this.setActiveTab}
                onClick={setDisplayLeftNav}
              >
                <Bars className='icon' />
              </TabContainer>
            </CustomMediaQuery>
          </div>
        </LargeDevice>

        <div className='right'>
          <TabContainer 
            className='profile'
            tabName='Profile'
            routeName='/profile'
            bordered
            active={activeTab} 
            handleClick={this.setActiveTab}
          >
            <CurrentUsersProfilePic/>
          </TabContainer>

          <TabContainer
            tabName='Create'
            bordered
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <Plus className='icon'/>
          </TabContainer>
          
          <TabContainer
            tabName='Messenger'
            bordered
            quantity={updates.Messenger}
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <Messenger className='icon'/>
          </TabContainer>

          <TabContainer
            tabName='Notifications'
            bordered
            quantity={updates.Notifications}
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <Bell className='icon'/>
          </TabContainer>

          <TabContainer
            tabName='Menu'
            bordered
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <CaretDown className='icon'/>
          </TabContainer>
        </div>
        <div className='dropdown' ref={this.dropdownRef}>
        {
          showDropdown()
        }
        </div>
      </nav>
    )
  }
  
}

export default withRouter(TopNav);