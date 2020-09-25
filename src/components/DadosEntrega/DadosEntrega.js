import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

const DadosEntrega = props => {
  const [cep, setCep] = useState('')
  const [endereço, setEndereço] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.aoEnviarForm({ cep, endereço, numero, estado, cidade })
      }}
    >
      <TextField
        id='cep'
        label='CEP'
        type='number'
        variant='outlined'
        margin='normal'
        value={cep}
        onChange={event => setCep(event.target.value)}
      />
      <TextField
        id='endereço'
        label='Enderenço'
        type='text'
        variant='outlined'
        fullWidth
        margin='normal'
        value={endereço}
        onChange={event => setEndereço(event.target.value)}
      />
      <TextField
        id='numero'
        label='Número'
        type='number'
        variant='outlined'
        margin='normal'
        value={numero}
        onChange={event => setNumero(event.target.value)}
      />
      <TextField
        id='estado'
        label='Estado'
        type='text'
        variant='outlined'
        margin='normal'
        value={estado}
        onChange={event => setEstado(event.target.value)}
      />
      <TextField
        id='cidade'
        label='Cidade'
        type='text'
        variant='outlined'
        margin='normal'
        value={cidade}
        onChange={event => setCidade(event.target.value)}
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega
