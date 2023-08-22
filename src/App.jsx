import Button from "./components/Button";
import Panel from "./components/Panel";
import Text from "./components/Text";

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Panel>
          <Text text='value 1' />
          <Button text='+' />
          <Button text='-' />
        </Panel>
        <Panel>
          <Text text='value 2' />
          <Button text='+' />
          <Button text='-' />
        </Panel>
      </div>
    </div>
  );
}

export default App;
