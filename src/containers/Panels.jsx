import { connect, useDispatch } from "react-redux";
import { increment1, decrement1, reset1 } from "../reducers/counter1";
import { increment2, decrement2, reset2 } from "../reducers/counter2";
import { RESET_REDUX_STATE } from "../reducers";
import { Button, Panel, Text } from "../components";

function Panels({ ...props }) {
  const dispatch = useDispatch();

  const {
    counter1,
    counter2,
    increment1,
    decrement1,
    increment2,
    decrement2,
    reset1,
    reset2,
  } = props;

  const captionCounter1 = Object.keys({ counter1 })[0];
  const captionCounter2 = Object.keys({ counter2 })[0];

  const handleDecrement1 = () => {
    if (counter1 > 0) decrement1();
  };

  const handleDecrement2 = () => {
    if (counter2 > 0) decrement2();
  };

  return (
    <>
      <Panel caption={captionCounter1}>
        <Text text={counter1} />
        <Button onClick={() => increment1()} text='+' />
        <Button onClick={handleDecrement1} text='-' />
        <Button onClick={() => reset1()} text='Сброс' />
      </Panel>
      <Panel caption={captionCounter2}>
        <Text text={counter2} />
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
    </>
  );
}

const mapState = (state) => ({
  counter1: state.counter1.value,
  counter2: state.counter2.value,
});
const mapDispatch = {
  increment1,
  decrement1,
  increment2,
  decrement2,
  reset1,
  reset2,
};

export default connect(mapState, mapDispatch)(Panels);
