import menu from '@assets/menu.svg';

const headerStyles = { 
  color: '#fff', 
  display: 'flex', 
  justifyContent: 'space-evenly' 
}

export const Header = () => {
  return (
    <div style={headerStyles}>
      <img src={menu} width='25px'/>
      Left Section Header
    </div>
  )
}
