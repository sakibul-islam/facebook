import { LikedIcon, LikeIcon } from "../icons/icons";
import { CareReact, HahaReact, LoveReact, SadReact, WowReact, AngryReact } from "./reactions";


const ReactionWithName = ({reacted}) => {
  switch(reacted) {
    case 'like':
      return (
        <>
          <LikedIcon className='icon like'/>
          <span className='like'>Like</span>
        </>
      );
    case 'haha':
      return (
        <>
          <HahaReact className='icon haha' />
          <span className='haha'>Haha</span>
        </>
      );
    case 'love':
      return (
        <>
          <LoveReact className='icon love'/>
          <span className='love'>Love</span>
        </>
      );
    case 'wow':
      return (
        <>
          <WowReact className='icon wow'/>
          <span className='wow'>Wow</span>
        </>
      );
    case 'care':
      return (
        <>
          <CareReact className='icon care'/>
          <span className='care'>Care</span>
        </>
      );
    case 'sad':
      return (
        <>
          <SadReact className='icon sad'/>
          <span className='sad'>Sad</span>
        </>
      );
    case 'angry':
      return (
        <>
          <AngryReact className='icon angry'/>
          <span className='angry'>Angry</span>
        </>
      );
    default:
      return (
        <>
          <LikeIcon className='icon like'/>
          <span className=''>Like</span>
        </>
      );
  }
}

export default ReactionWithName;