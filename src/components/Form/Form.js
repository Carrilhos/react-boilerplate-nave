import React, { Fragment, useState } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core/'

const Form = props => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [errors, setErros] = useState({ cpf: { valido: true, texto: '' } })

  return (
    <Fragment>
      <form
        onSubmit={event => {
          event.preventDefault()
          props.onSubmit({ nome, sobrenome, cpf, novidades, promocoes })
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
        />
        <TextField
          id='sobrenome'
          label='Sobrenome'
          variant='outlined'
          fullWidth
          margin='normal'
          value={sobrenome}
          onChange={event => setSobrenome(event.target.value)}
        />
        <TextField
          id='email'
          label='Email'
          variant='outlined'
          fullWidth
          margin='normal'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          id='cpf'
          label='CPF'
          variant='outlined'
          fullWidth
          margin='normal'
          value={cpf}
          onChange={event => setCpf(event.target.value)}
          error={!errors.cpf.valido}
          helperText={errors.cpf.texto}
          onBlur={event => {
            const eValido = props.validarCPF(cpf)
            setErros({ cpf: eValido })
          }}
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
          Cadastrar
        </Button>
      </form>
    </Fragment>
  )
}

export default Form
