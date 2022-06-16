import PropTypes from 'prop-types';
import Button from './Button';


function Header({ title }) {
  const onClick = () => {
    console.log('clickkk')
  }

  return (
    <header>
      <h1>{title}</h1>
      <Button onClick={onClick} color='lightgreen' text='add' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Header