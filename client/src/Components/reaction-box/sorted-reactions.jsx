import { Component } from "react";
import { CareReact, HahaReact, LoveReact, SadReact, WowReact, LikeReact, AngryReact } from "./reactions";

class SortedReactions extends Component {

  zIndexCalculation = (i) => {
    switch(i) {
      case 0:
        return 2;
      case 1:
        return 1;
      case 2:
        return 0;
      default:
        return 0;
    }
  }
  returnReactionIcon = (reaction, i) => {
    const zIndex = this.zIndexCalculation(i);
    const style = {
      zIndex,
    }

    switch(reaction) {
      case 'like':
        return <LikeReact key={i} className='icon like' style={style}/>
      case 'haha':
        return <HahaReact key={i} className='icon haha' style={style}/>
      case 'love':
        return <LoveReact key={i} className='icon love' style={style}/>
      case 'wow':
        return <WowReact key={i} className='icon wow' style={style}/>
      case 'care':
        return <CareReact key={i} className='icon care' style={style}/>
      case 'sad':
        return <SadReact key={i} className='icon sad' style={style}/>
      case 'angry':
        return <AngryReact key={i} className='icon angry' style={style}/>
      default:
        return <LikeReact key={i} className='icon like' style={style}/>
    }
  }
  render() {
    const {reactionsArr} = this.props
    return (
      <div className='reactions'>
        {reactionsArr.map((reaction, i) => this.returnReactionIcon(reaction, i))}
      </div>
    )
  }
}

export default SortedReactions;