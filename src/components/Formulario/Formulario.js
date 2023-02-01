import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

export default function () {
    const escolas = [
        'Alura',
        'Udemy',
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Novos cursos de Douglas </h2>
                <CampoTexto nome='Curso' placeholder='Digite o novo curso cursado'></CampoTexto>
                <CampoTexto nome='Empresa' placeholder='Digite a Empresa prestadora'></CampoTexto>
                <CampoTexto nome='Certificado' placeholder='digite a URL do certificado'></CampoTexto>
                <ListaSuspensa nome='Escola' itens={escolas}></ListaSuspensa>
            </form>
        </section>
    )
}