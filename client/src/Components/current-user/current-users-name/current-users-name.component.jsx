import { connect } from 'react-redux';
import Name from '../../name/name.component';

const CurrentUsersName = ({displayName, userName, dispatch, ...otherProps}) => (
  <Name displayName={displayName} userName={userName} {...otherProps} />
);

const mapStateToProps = ({user}) => ({
  displayName: user.displayName || 'Unknown Visitor',
  userName: ''
})

export default connect(mapStateToProps)(CurrentUsersName);