import React, { Fragment, useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core/'

import ValidacoesCadastro from 'context/validacoesCadastro'
import UseErros from 'hooks/useErros'

const DadosPessoais = ({ aoEnviarForm }) => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)

  const validacoes = useContext(ValidacoesCadastro)

  const [erros, validarCampos, possoEnviar] = UseErros(validacoes)

  return (
    <Fragment>
      <form
        onSubmit={event => {
          event.preventDefault()
          possoEnviar()
            ? aoEnviarForm({ nome, sobrenome, cpf, novidades, promocoes })
            : console.log('Digite um CPF valido')
        }}
      >
        <TextField
          value={nome}
          id='nome'
          label='Nome'
          variant='outlined'
          fullWidth
          margin='normal'
          onChange={event => setNome(event.target.value)}
          required
        />
        <TextField
          id='sobrenome'
          label='Sobrenome'
          variant='outlined'
          fullWidth
          margin='normal'
          value={sobrenome}
          onChange={event => setSobrenome(event.target.value)}
          required
        />

        <TextField
          id='cpf'
          label='CPF'
          variant='outlined'
          fullWidth
          margin='normal'
          value={cpf}
          onChange={event => setCpf(event.target.value)}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          onBlur={validarCampos}
          required
          name='cpf'
        />

        <FormControlLabel
          label='promoções'
          control={
            <Switch
              checked={promocoes}
              onChange={event => setPromocoes(event.target.checked)}
              name='Promoções'
              color='primary'
            />
          }
        />
        <FormControlLabel
          label='Novidades'
          control={
            <Switch
              checked={novidades}
              onChange={event => setNovidades(event.target.checked)}
              name='Novidades'
              color='primary'
            />
          }
        />

        <Button type='submit' variant='contained' color='primary'>
          Próximo
        </Button>
      </form>
    </Fragment>
  )
}

export default DadosPessoais
