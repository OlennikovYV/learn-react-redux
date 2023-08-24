import { connect, useDispatch } from "react-redux";
import Button from "./components/Button";
import Panel from "./components/Panel";
import Text from "./components/Text";
import { increment1, decrement1, reset1 } from "./reducers/value1";
import { increment2, decrement2, reset2 } from "./reducers/value2";
import { RESET_REDUX_STATE } from "./reducers";

function App({ ...props }) {
  const dispatch = useDispatch();

  const {
    value1,
    value2,
    increment1,
    decrement1,
    increment2,
    decrement2,
    reset1,
    reset2,
  } = props;

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
          <Button onClick={() => reset1()} text='Сброс' />
        </Panel>
        <Panel caption={nameValue2}>
          <Text text={value2} />
          <Button onClick={() => increment2()} text='+' />
          <Button onClick={handleDecrement2} text='-' />
          <Button onClick={() => reset2()} text='Сброс' />
        </Panel>
        <Panel>
          <Button
            onClick={() => dispatch({ type: RESET_REDUX_STATE })}
            text='Сбросить всё'
          />
        </Panel>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  value1: state.counter1.value,
  value2: state.counter2.value,
});
const mapDispatch = {
  increment1,
  decrement1,
  increment2,
  decrement2,
  reset1,
  reset2,
};

export default connect(mapState, mapDispatch)(App);
