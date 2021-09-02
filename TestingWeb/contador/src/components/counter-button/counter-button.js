<<<<<<< HEAD
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
=======
import React  from 'react'

export const CounterButton = (props) => {
  const symbol = props.type === 'increment' ? '+' : '-';
  const modifiedBy = props.value || 1;
  const buttonAction = ()=>{
    
    if( props.type === 'increment'){
      props.onChangeValue(modifiedBy)
      
    }else{
      props.onChangeValue(-modifiedBy)
    }
    
  }
  return (<button onClick={buttonAction}> { symbol } </button>)
}

>>>>>>> feature/react-unit-testing
