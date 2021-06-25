import ProfilePic from '../../profile-pic/profile-pic.component';
import { connect } from 'react-redux';


const CurrentUsersProfilePic = ({photoURL}) => (
  <ProfilePic photoURL={photoURL} />
)

const mapStateToProps = ({user: {photoURL}}) => ({
  photoURL
})


export default connect(mapStateToProps)(CurrentUsersProfilePic);