import { useState } from 'react'

const UseErros = (validacoes, cpf) => {
  const estadoInicial = criarEstadoInicial(validacoes)

  const [erros, setErros] = useState(estadoInicial)
  const validarCampos = event => {
    const { name, value } = event.target
    setErros({
      ...erros,
      [name]: validacoes[name](value)
    })
  }

  const possoEnviar = () => Object.keys(erros).every(campo => erros[campo].valido)

  return [erros, validarCampos, possoEnviar]
}

const criarEstadoInicial = validacoes => {
  return Object.keys(validacoes).reduce((acumulador, key) => {
    acumulador[key] = { valido: true, texto: '' }
    return acumulador
  }, {})
}

export default UseErros
