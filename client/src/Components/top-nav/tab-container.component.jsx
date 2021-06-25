import { withRouter } from "react-router-dom";
import HoverButton from "../hoverButton/hover-button.component";
import IconContainer from "./icon-container/icon-container.component";

const TabContainer = ({routeName, tabName, className, active, bordered, children, quantity, handleClick, onClick}) => (
  <HoverButton
    className={`hover-button ${className} ${active === tabName ? 'active' : ''}`}
    onClick={() => {
      handleClick(tabName, routeName);
      if(onClick) onClick()
    }}
    tooltip={tabName}>
    <IconContainer quantity={quantity}>
      {children}
    </IconContainer>
    {active === tabName & bordered ? <div className='bottom-border'></div> : ''}
  </HoverButton>
);

export default withRouter(TabContainer)