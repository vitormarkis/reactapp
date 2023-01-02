import './styles.css'
import React, { useState, useEffect } from 'react'

import { Card } from '../../components/Card'

function Home() {
  const [usuarioGit, setUsuarioGit] = useState({login: '', avatar: '', followers: ''})
  const [nome_do_aluno, setNomeDoAluno] = useState('Fulano')
  const [nacionalidade_do_aluno, setNacionalidadeDoAluno] = useState('Brasileiro')
  const [ALUNOS, setALUNOS] = useState([])

  function registrarNovoAluno() {
    const novo_aluno = {
      name: nome_do_aluno,
      nationality: nacionalidade_do_aluno,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setALUNOS(alunos_passado => [...alunos_passado, novo_aluno])
  }

  // useEffect(() => {
  //   fetch('https://api.github.com/users/jakeliny')
  //   .then(res => res.json())
  //   .then(data => {
  //     let { login, avatar_url, followers } = data
  //     setUsuarioGit({
  //       login,
  //       avatar_url,
  //       followers,
  //     })
  //   })
  // }, [])

  useEffect(() => {
    (async () => {
      let promise = await fetch('https://api.github.com/users/jakeliny')
      let data = await promise.json()
      setUsuarioGit({
        login: data.login,
        avatar_url: data.avatar_url,
        followers: data.followers,
      })
    })()
  }, [])


  return (
    <div className='div-container'>
      <div className="container">
        <h1>Lista de Presença</h1>
        <header>
          <small>{ usuarioGit.followers }</small>
          <strong>{ usuarioGit.login }</strong>
          <img src={ usuarioGit.avatar_url } alt="" />
        </header>
      </div>


      <input
      type="text"
      placeholder='Digite o nome de um convidado...'
      onInput={e => setNomeDoAluno(e.target.value)}
      />
      <input
      type="text"
      placeholder='Digite o país de nascença do convidado...'
      onInput={e => setNacionalidadeDoAluno(e.target.value)}
      />
      <button onClick={registrarNovoAluno}>Enviar</button>
      
      {
        ALUNOS.map(aluno => (
          <Card
            key={aluno.time}
            name={aluno.name} 
            nationality={aluno.nationality}
            time={aluno.time}
          />
          )
        )
      }

    </div>
  )
}

export default Home
