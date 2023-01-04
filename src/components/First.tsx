import React from 'react'
type personProps={
  name:string
  age:number
  handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
  inputChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
  value:string
}
function First(props:personProps) {
  return (
    <div>
      <h1>Hello, My name is {props.name} and I'm {props.age} years old.</h1>
      <button onClick={props.handleClick}>Click Me</button>
      <input value={props.value} onChange={props.inputChange}></input>
    </div>
  )
}

export default First
