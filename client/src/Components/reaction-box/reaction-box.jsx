import './reactions.styles.scss';
import IconContainer from '../top-nav/icon-container/icon-container.component';
import { Component } from 'react';
import { AngryReact, CareReact, HahaReact, LoveReact, SadReact, WowReact } from './reactions';

class ReactionBox extends Component {
  
  handleReact = (e, reactName) => {
    e.stopPropagation()
    const {toggleReact} = this.props;
    toggleReact(reactName);
  }

  render() {
    
      return (
      <div className='reaction-box'>
        <IconContainer onClick={(e) => this.handleReact(e, 'haha')}>
          <HahaReact className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'love')}>
          <LoveReact className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'wow')}>
        <WowReact className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'care')}>
          <CareReact className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'sad')}>
          <SadReact className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'angry')}>
          <AngryReact className='reaction'/>
        </IconContainer>
      </div>
    );
  }
}

export default ReactionBox;



