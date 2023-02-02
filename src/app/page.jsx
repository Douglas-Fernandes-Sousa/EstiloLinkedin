'use client';
import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Curso from '../components/Curso/Curso';
import Formulario from '../components/Formulario/Formulario';


export default function Home() {

  const escolas = [{
    nome: 'Alura',
    corPrimaria: '#CD853F',
    corSecundaria: '#FAF0E6',
  },
  {
    nome: 'Udemy',
    corPrimaria: '#FFE4B5',
    corSecundaria: '#FFFAF0',
  },
]

  const[cursoFinalizado, setCursoFinalizado] = useState([])

  const aoNovoCursoAdicionado = (cursoCadastrado) => {
    setCursoFinalizado([...cursoFinalizado, cursoCadastrado])
    console.log(cursoFinalizado)
  }
  
  return (

    <div>
      <Banner></Banner>
      <Formulario
      escolas={escolas.map(escola => escola.nome)}
      aoCursoCadastrado={cursoCadastrado => aoNovoCursoAdicionado(cursoCadastrado)}
      ></Formulario>
      {escolas.map(escola => <Curso 
      key={escola.nome} escola={escola.nome} 
      corPrimaria={escola.corPrimaria} 
      corSecundaria={escola.corSecundaria}
      cursoFinalizado={cursoFinalizado}
      ></Curso>)}
    </div>
  )
}
