import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'

import ValidacoesCadastro from 'context/validacoesCadastro'
import UseErros from 'hooks/useErros'

const DadosUsuario = props => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const validacoes = useContext(ValidacoesCadastro)

  const [erros, validarCampos, possoEnviar] = UseErros(validacoes)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        possoEnviar() === true ? props.aoEnviarForm({ email, senha }) : console.log('Digite uma senha valida')
      }}
    >
      <TextField
        value={email}
        onChange={event => setEmail(event.target.value)}
        id='email'
        label='email'
        type='email'
        variant='outlined'
        fullWidth
        margin='normal'
        required
        value={email}
        onChange={event => {
          setEmail(event.target.value)
        }}
      />
      <TextField
        value={senha}
        onChange={event => setSenha(event.target.value)}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id='senha'
        name='senha'
        label='Senha'
        type='password'
        variant='outlined'
        fullWidth
        margin='normal'
        required
        value={senha}
        onChange={event => {
          setSenha(event.target.value)
        }}
      />
      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario
