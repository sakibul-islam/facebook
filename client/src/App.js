import './App.scss';

import TopNav from './Components/top-nav/top-nav.component';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from './pages/profile/profile.page';
import HomePage from './pages/home/home.page';
import LoginPage from "./pages/login/login.page";
import FriendsPage from './pages/friends/friends.page';

import { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setUser } from './redux/user/user.action';
import WatchPage from './pages/watch/watch.page';
import { CustomMediaQuery } from './Components/responsive-rendering/responsive-rendering.component';
import LeftNav from './Components/left-nav/left-nav.component';

class App extends Component {
  state = {
    displayLeftNav: 'none'
  }

  setDisplayLeftNav = () => {
    const {displayLeftNav} = this.state;

    if(displayLeftNav === 'none') {
      console.log(displayLeftNav);
      this.setState({displayLeftNav: 'flex'});
    } else {
      console.log(displayLeftNav);
      this.setState({displayLeftNav: 'none'});
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user) {
        const {displayName, email, photoURL } = user;
        this.props.setUser(({displayName, email, photoURL}))
      } else {
        //sign in popup
      }
    })
  }

  render() {
    return (
      <div className="App">
        <TopNav setDisplayLeftNav={this.setDisplayLeftNav}/>
        <CustomMediaQuery maxWidth={1100}>
          <LeftNav className='fixed' style={{display: this.state.displayLeftNav}} setDisplayLeftNav={this.setDisplayLeftNav}/>
        </CustomMediaQuery>
        <Switch>
          <Route path='/profile' component={ProfilePage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/friends' component={FriendsPage} />
          <Route exact path='/watch' component={WatchPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(App);
