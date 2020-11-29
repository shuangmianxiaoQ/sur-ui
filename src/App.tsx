import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div>
      <Menu defaultIndex="2-1" defaultOpenSubMenus={['2']} onSelect={(index) => alert(index)}>
        <MenuItem>item 1</MenuItem>
        <MenuItem disabled>item 2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
        </SubMenu>
        <MenuItem>item 3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
