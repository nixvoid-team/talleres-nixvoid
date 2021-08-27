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

