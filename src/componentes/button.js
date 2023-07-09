
const Button = (props)=>{

    const labelTeste = props.label

    const Alerta = ()=>{
        alert(`A label desse botão é ${labelTeste}`)
    }

    return(
        <button onClick={Alerta}>{props.label}</button>
    )
}

export default Button