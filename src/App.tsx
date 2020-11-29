import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

library.add(fas);

function App() {
  return (
    <div>
      <Icon icon="coffee" theme="secondary" size="10x" />

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
