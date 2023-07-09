import './test.css'

const Card = (props)=>{
    return(
           <p style={{color: 'red'}} className="cardClass" >{props.text}</p> 
    )
}

export default Card