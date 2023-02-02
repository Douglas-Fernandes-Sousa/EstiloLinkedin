import Card from '../Card/Card';
import './Curso.css';

export default function Curso(props) {
    return (
        <section className='curso' style={{ backgroundColor: props.corSecundaria }} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.escola}</h3>
            {props.cursoFinalizado.map(cursoCadastrado => <Card></Card>)}
        </section>
    )
}