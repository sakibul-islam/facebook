import './home.styles.scss';

import Contents from '../../Components/Contents/contents.components';
import LeftNav from '../../Components/left-nav/left-nav.component';
import RightNav from '../../Components/right-nav/right-nav.components';

const HomePage = () => {
  return (
    <div className='home'>
      <LeftNav/>
      <Contents/>
      <RightNav/>
  </div>
  )
}

export default HomePage;