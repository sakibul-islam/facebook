import './hover-button.styles.scss';

const HoverButton = ({children, tooltip, ...otherProps}) => {
  return (
    <div className='hover-button' {...otherProps}>
      {children}
      {tooltip ? <div className='tooltip'>{tooltip}</div> : null}
    </div>
  )
}

export default HoverButton;