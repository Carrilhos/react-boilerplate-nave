import React, { Fragment, useState, useEffect } from 'react'
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'

import DadosPessoais from 'components/DadosPessoais'
import DadosUsuario from 'components/DadosUsuario'
import DadosEntrega from 'components/DadosEntrega'

const FormCadastro = ({ aoEnviarForm }) => {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})

  useEffect(() => (etapaAtual === formularios.length - 1 ? aoEnviarForm(dadosColetados) : console.log()))

  const next = dados => {
    setEtapaAtual(etapaAtual + 1)
  }

  const coletarDados = dados => {
    setDadosColetados({ ...dadosColetados, ...dados })
    next()
  }

  const formularios = [
    <DadosUsuario aoEnviarForm={coletarDados} />,
    <DadosPessoais aoEnviarForm={coletarDados} />,
    <DadosEntrega aoEnviarForm={coletarDados} />,
    <Typography variant='h5'> obrigado pelo cadastro!</Typography>
  ]

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  )
}

export default FormCadastro
