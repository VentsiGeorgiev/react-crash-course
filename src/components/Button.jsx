function Button({ color, text, onClick }) {

  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
  )
}

Button.defaultProps = {
  color: 'blue'
}

export default Button