import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div>
      <Button>Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button type={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button type={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button type={ButtonType.Link} href="https://www.baidu.com">
        Link
      </Button>
      <Button type={ButtonType.Link} href="https://www.baidu.com" disabled>
        Disabled Link
      </Button>
    </div>
  );
}

export default App;
