import { connect } from "react-redux";
import Button from "./components/Button";
import Panel from "./components/Panel";
import Text from "./components/Text";
import { increment1, decrement1 } from "./reducers/value1";
import { increment2, decrement2 } from "./reducers/value2";

function App({ ...props }) {
  const { value1, value2, increment1, decrement1, increment2, decrement2 } =
    props;
  const nameValue1 = Object.keys({ value1 })[0];
  const nameValue2 = Object.keys({ value2 })[0];

  const handleDecrement1 = () => {
    if (value1 > 0) decrement1();
  };

  const handleDecrement2 = () => {
    if (value2 > 0) decrement2();
  };

  return (
    <div className='app'>
      <div className='container'>
        <Panel caption={nameValue1}>
          <Text text={value1} />
          <Button onClick={() => increment1()} text='+' />
          <Button onClick={handleDecrement1} text='-' />
        </Panel>
        <Panel caption={nameValue2}>
          <Text text={value2} />
          <Button onClick={() => increment2()} text='+' />
          <Button onClick={handleDecrement2} text='-' />
        </Panel>
        <Panel>
          <Button text='Сбросить' />
        </Panel>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  value1: state.counter1.value,
  value2: state.counter2.value,
});
const mapDispatch = { increment1, decrement1, increment2, decrement2 };

export default connect(mapState, mapDispatch)(App);
