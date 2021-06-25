import './icon-container.styles.scss';

const IconContainer = ({children, quantity, tooltip , ...props}) => {
  return (
    <div className='icon-container' {...props}>
      { quantity ? <div className='badge'>{quantity}</div> : null}
      {children}
      {tooltip ? <div className='tooltip'>{tooltip}</div> : null}
    </div>
  )
}

export default IconContainer;