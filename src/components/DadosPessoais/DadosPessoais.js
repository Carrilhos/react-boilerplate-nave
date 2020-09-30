import React, { Fragment, useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel, Select, InputLabel } from '@material-ui/core/'

import ValidacoesCadastro from 'context/validacoesCadastro'
import UseErros from 'hooks/useErros'

const DadosPessoais = ({ aoEnviarForm }) => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpfOrCnpj, setCpfOrCnpj] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')

  const validacoes = useContext(ValidacoesCadastro)

  const [erros, validarCampos, possoEnviar] = UseErros(validacoes)

  const qualquernome = {
    cpf: (
      <form
        onSubmit={event => {
          event.preventDefault()
          if (possoEnviar()) aoEnviarForm({ nome, sobrenome, cnpj, cpf, novidades, promocoes })
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
    ),
    cnpj: (
      <form
        onSubmit={event => {
          event.preventDefault()
          if (possoEnviar()) aoEnviarForm({ nome, sobrenome, cpf, novidades, promocoes })
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
          id='cnpj'
          label='CNPJ'
          variant='outlined'
          fullWidth
          margin='normal'
          value={cnpj}
          onChange={event => setCnpj(event.target.value)}
          required
          name='cnpj'
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
    )
  }

  console.log('render')
  return (
    <Fragment>
      <InputLabel>Seleciona se é pessoa fisica ou juridica</InputLabel>
      {qualquernome[cpfOrCnpj]}
      <Select native value={cpfOrCnpj} onChange={event => setCpfOrCnpj(event.target.value)}>
        <option aria-label='Selecione' value='' />
        <option value='cpf'>CPF</option>
        <option value='cnpj'>CNPJ</option>
      </Select>
    </Fragment>
  )
}

export default DadosPessoais
