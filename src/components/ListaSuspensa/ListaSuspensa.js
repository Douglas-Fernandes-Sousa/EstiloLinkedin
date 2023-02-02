import './ListaSuspensa.css';

export default function ListaSuspensa(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.nome}</label>
            <select
                required={props.obrigatorio}
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}