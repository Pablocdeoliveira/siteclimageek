import './Temperatura.css'

function Temperatura(props){
    return(
        <div className='container'>
    
    <h1>{props.descricao}</h1>
    <p>{props.estado}</p>
    <p>{props.Temp}</p>
    
        </div>
    )
    
    }
    
    export default Temperatura