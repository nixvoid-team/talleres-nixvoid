export const ValueViewer = (props) => {
<<<<<<< HEAD
  return (<h1>{ props.value }</h1>);
=======
  const value = props.value || 0;
  return (<div>{ value }</div>)
>>>>>>> feature/react-unit-testing
}