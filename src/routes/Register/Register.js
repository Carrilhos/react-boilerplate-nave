import React from 'react'
import { Container, Typography } from '@material-ui/core'

import Form from 'components/FormCadastro'
import { validarCPF, validarSenha } from 'models/cadastro'
import ValidacoesCadastro from 'context/validacoesCadastro'

const Register = () => {
  const aoEnviarForm = dados => console.log(dados)

  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='Center'>
        Formulario De Cadastro!
      </Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
        <Form aoEnviarForm={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

export default Register
