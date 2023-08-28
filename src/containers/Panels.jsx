import { connect, useDispatch } from "react-redux";
import {
  incrementCounter1,
  decrementCounter1,
  resetCounter1,
} from "../reducers/counter1";
import {
  incrementCounter2,
  decrementCounter2,
  resetCounter2,
} from "../reducers/counter2";
import { fakeFetchCounter1 } from "../reducers/counter1";
import { fakeFetchCounter2 } from "../reducers/counter2";
import { RESET_REDUX_STATE } from "../reducers";
import { Button, Panel, Text } from "../components";

function Panels({ ...props }) {
  const dispatch = useDispatch();

  const {
    counter1,
    counter2,
    isLoadingCounter1,
    isLoadingCounter2,
    incrementCounter1,
    decrementCounter1,
    incrementCounter2,
    decrementCounter2,
    resetCounter1,
    resetCounter2,
  } = props;

  const captionCounter1 = Object.keys({ counter1 })[0];
  const captionCounter2 = Object.keys({ counter2 })[0];

  const handleDecrementCounter1 = () => counter1 > 0 && decrementCounter1();
  const handleDecrementCounter2 = () => counter2 > 0 && decrementCounter2();
  const handleFakeFetchCounter1 = () => dispatch(fakeFetchCounter1(1));
  const handleFakeFetchCounter2 = () => dispatch(fakeFetchCounter2(2));

  return (
    <>
      <Panel caption={captionCounter1}>
        <Text text={counter1} />
        <Button
          disabled={isLoadingCounter1}
          onClick={() => incrementCounter1()}
          text='+'
        />
        <Button
          disabled={isLoadingCounter1}
          onClick={handleDecrementCounter1}
          text='-'
        />
        <Button onClick={handleFakeFetchCounter1} text='С сервера' />
        <Button
          disabled={isLoadingCounter1}
          onClick={() => resetCounter1()}
          text='Сброс'
        />
      </Panel>
      <Panel caption={captionCounter2}>
        <Text text={counter2} />
        <Button
          disabled={isLoadingCounter2}
          onClick={() => incrementCounter2()}
          text='+'
        />
        <Button
          disabled={isLoadingCounter2}
          onClick={handleDecrementCounter2}
          text='-'
        />
        <Button onClick={handleFakeFetchCounter2} text='С сервера' />
        <Button
          disabled={isLoadingCounter2}
          onClick={() => resetCounter2()}
          text='Сброс'
        />
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
  isLoadingCounter1: state.counter1.isLoadingCounter1,
  isLoadingCounter2: state.counter2.isLoadingCounter2,
  counter1: state.counter1.value,
  counter2: state.counter2.value,
});
const mapDispatch = {
  incrementCounter1,
  decrementCounter1,
  incrementCounter2,
  decrementCounter2,
  resetCounter1,
  resetCounter2,
};

export default connect(mapState, mapDispatch)(Panels);
