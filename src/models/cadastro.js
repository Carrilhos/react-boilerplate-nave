const validarCPF = cpf =>
  cpf.length !== 11 ? { valido: false, texto: 'CPF deve ter 11 digitos' } : { valido: true, texto: '' }

const validarSenha = senha =>
  senha.length < 4 || senha.length > 72
    ? { valido: false, texto: 'Senha deve ter entre 4 e 72 digitos' }
    : { valido: true, texto: '' }
// const senhaInvalido = senha.length < 4 || senha.length
// return { valido: !senhaInvalido, texto: senhaInvalido ? 'Senha deve ter entre 4 e 72 digitos' : '' }

export { validarCPF, validarSenha }
