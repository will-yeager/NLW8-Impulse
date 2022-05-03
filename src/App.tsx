interface IProps {
  text?: string;
}

function Button(props: IProps) {
  return <button>{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button/>
    </div>
  )
}

export default App
