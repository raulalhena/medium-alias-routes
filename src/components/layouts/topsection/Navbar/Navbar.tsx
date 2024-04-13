import logo from '@assets/react.svg'
import { Avatar } from '../Avatar/Avatar'

const navbarStyles = { 
  display: 'flex', 
  justifyContent: 'space-evenly', 
  border: '1px solid #fff', 
  borderRadius: '6px' 
}

export const Navbar = () => {
  return (
    <div style={navbarStyles}>
      <div>
        <img src={logo} />
        Navbar
      </div>
      <Avatar />
    </div>
  )
}
