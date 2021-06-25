import { connect } from 'react-redux';
import './gun.styles.scss';
import gunPng from './gun1.png';
import FiringSound from '../firing-sound/firing-sound.mp3';

const firingSound = new Audio(FiringSound)

const Gun = ({gun: {gunInAnimation, triggered, gunOutAnimation}}) => {
  if(triggered) firingSound.play();
  
  const gunIn = gunInAnimation ? 'gun-in': '';
  const trigger = triggered ? 'triggered': '';
  const gunOut = gunOutAnimation ? 'gun-out': '';
  return (
    <div className={`gun ${gunIn} ${trigger} ${gunOut}`} >
      <img src={gunPng} alt=''/>
    </div>  
  )};
  
const mapStatetoProps = ({gun}) => ({
  gun
})

export default connect(mapStatetoProps)(Gun);