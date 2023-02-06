import './Card.css';

export default function Card({ nome, imagem, escola }) {
    return (
        <div className='card'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{escola}</h5>
            </div>
        </div>
    )
}