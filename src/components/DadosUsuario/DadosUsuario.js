import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'

import ValidacoesCadastro from 'context/validacoesCadastro'
import UseErros from 'hooks/useErros'

const DadosUsuario = ({ aoEnviarForm }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const validacoes = useContext(ValidacoesCadastro)

  const [erros, validarCampos, possoEnviar] = UseErros(validacoes)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (possoEnviar()) aoEnviarForm({ email, senha })
      }}
    >
      <TextField
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        id='email'
        label='email'
        type='email'
        variant='outlined'
        fullWidth
        margin='normal'
        required
        value={email}
      />
      <TextField
        value={senha}
        onChange={({ target: { value } }) => setSenha(value)}
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
      />
      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario
