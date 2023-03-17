const SuperButton = ({buttonText}) => {

    const doSomething = () => {

        console.log("Hola");

    }

  return (
    <button className="btn" type="button" onClick={doSomething}>{buttonText}</button>
  )
}

export default SuperButton