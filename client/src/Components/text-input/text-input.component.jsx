import './text-input.styles.scss';

const TextInput = ({children, ...otherprops}) => {
  return (
    <div className='text-input'>
      <input
        type='text'
        className='input'
        {...otherprops}
      />
    </div>
    
  )
}
export default TextInput;