
import { Route, withRouter } from 'react-router-dom';
import Profile from '../../Components/profile/profile.component';

const ProfilePage = ({match}) => (
  <div>
    {/* <Route exact path='/profile' component={Profile} /> */}
    <Route path={`${match.path}/:userName`} component={Profile}/>
  </div>
 
)

export default withRouter(ProfilePage);