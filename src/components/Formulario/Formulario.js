'use client';
import { useState } from 'react';
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

export default function (props) {


    const [curso, setCurso] = useState('')
    const [certificado, setCertificado] = useState('')
    const [escola, setEscola] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCursoCadastrado({
            curso,
            certificado,
            escola
        })
        setCurso('')
        setCertificado('')
        setEscola('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Inserir novo curso de Douglas</h2>
                <CampoTexto
                    valor={curso}
                    aoAlterado={valor => setCurso(valor)}
                    obrigatorio={true} nome='Curso'
                    placeholder='Digite o novo curso cursado'>
                </CampoTexto>
                <CampoTexto
                    valor={certificado}
                    aoAlterado={valor => setCertificado(valor)}
                    obrigatorio={true}
                    nome='Certificado'
                    placeholder='digite a URL do certificado'>
                </CampoTexto>
                <ListaSuspensa
                    obrigatorio={true}
                    valor={escola}
                    aoAlterado={valor => setEscola(valor)}
                    nome='Escola'
                    itens={props.escolas}>
                </ListaSuspensa>
                <Botao
                    texto='Criar novo Curso'>
                </Botao>
            </form>
        </section>
    )
}