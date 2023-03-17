const SuperForm = ( props ) => {

    console.log(props);

  return (
    <>
        <div>{props.title}</div> 
        {props.boton({buttonText: "Do something"})}   
    </>

  )
}
export default SuperForm