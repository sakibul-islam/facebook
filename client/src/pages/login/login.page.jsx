import { connect } from 'react-redux';
import HoverButton from '../../Components/hoverButton/hover-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './login.styles.scss';

const LoginPage = ({user}) => {

  return (
    <div className='login-page'>
      {
        user.displayName ? (
          <div>
            <h1>{user.displayName}</h1>
            <HoverButton
              className='sign-out hover-button'
              onClick={() => auth.signOut()}>
              Sign Out
            </HoverButton>
          </div>
        ) : (
          <div>
            <h1>Sign In</h1>
            <HoverButton 
              className='google-signin-btn hover-button'
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </HoverButton>
          </div>
        )
      }
      
    </div>
  )
}

const mapStateToProps = ({user}) => ({
  user
})

export default connect(mapStateToProps)(LoginPage);