import React from 'react'
import { Container, Typography } from '@material-ui/core'

import Form from 'components/Form'

const Register = () => {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='Center'>
        Formulario De Cadastro!
      </Typography>
      <Form onSubmit={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  )
}

const aoEnviarForm = dados => console.log(dados)

const validarCPF = cpf =>
  cpf.length !== 11 ? { valido: false, texto: 'CPF deve ter 11 digitos' } : { valido: true, texto: '' }

export default Register
