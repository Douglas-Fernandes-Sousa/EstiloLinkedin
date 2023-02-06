import Card from '../Card/Card';
import './Curso.css';

export default function Curso(props) {
    return (
        (props.cursoFinalizado.length > 0) && <section className='curso' style={{ backgroundColor: props.corSecundaria }} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.escola}</h3>
            <div>
                {props.cursoFinalizado.map(cursoCadastrado => <Card key={cursoCadastrado.nome} nome={cursoCadastrado.nome} escola={cursoCadastrado.escola} imagem={cursoCadastrado.imagem}></Card>)}
            </div>
        </section>
    )
}