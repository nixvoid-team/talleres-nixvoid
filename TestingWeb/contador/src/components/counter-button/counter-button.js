export const CounterButton = (props) => {
  const symbol = props.type === 'increment' ? '+' : '-';
  return (<button> { symbol } </button>)
}

