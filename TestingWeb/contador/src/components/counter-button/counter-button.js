export const CounterButton = (props) => {
  const symbol = props.type === 'increment' ? '+' : '-';
  let modifier;
  if (props.type === 'increment') {
    modifier = 1;
  } else {
    modifier = -1;
  }
  return (
    <button
      onClick={() => props.onChangeValue(modifier)}
    > { symbol } </button>
  );
}