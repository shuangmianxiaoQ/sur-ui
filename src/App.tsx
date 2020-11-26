import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div>
      <Button autoFocus className="custom">
        Button
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => alert(123)}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small} >
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
