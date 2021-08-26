import React  from 'react'

export const CounterButton = (props) => {
  const symbol = props.type === 'increment' ? '+' : '-';
  const buttonAction = ()=>{
    
    if( props.type === 'increment'){
      props.onChangeValue(1)
      
    }else{
      props.onChangeValue(-1)
    }
    
  }
  return (<button onClick={buttonAction}> { symbol } </button>)
}

