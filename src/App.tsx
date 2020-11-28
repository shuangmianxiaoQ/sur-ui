import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div>
      <Menu mode="vertical" defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem>item 1</MenuItem>
        <MenuItem disabled>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
      </Menu>
      <Button autoFocus className="custom">
        Button
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => alert(123)}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">
        Link
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
        Disabled Link
      </Button>
    </div>
  );
}

export default App;
