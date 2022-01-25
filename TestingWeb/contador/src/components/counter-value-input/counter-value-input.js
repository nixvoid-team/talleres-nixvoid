export const CounterValueInput = (props) => {
  return (
    <input
      placeholder={'Ingresa tu valor inicial'}
      type={'number'}
      onChange={(event) => {
        props.onValueInput(Number(event.target.value))
      }}
    />
  )
}