import './ListaSuspensa.css';

export default function ListaSuspensa(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.nome}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}