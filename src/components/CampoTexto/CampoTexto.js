import './CampoTexto.css';

export default function (props) {
    return (
        <div className='campo-texto'>
            <label>{props.nome}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}