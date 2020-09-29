const validarCPF = number => {
  number = number.replace(/[^\d]+/g, '')
  let i
  var sum
  var rest
  sum = 0
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  )
    return { valido: false, texto: 'Digite um CPF valido' }
  for (i = 1; i <= 9; i++) sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0
  if (rest != parseInt(number.substring(9, 10))) return { valido: false, texto: 'Digite um CPF valido' }

  sum = 0
  for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0
  if (rest != parseInt(number.substring(10, 11))) return { valido: false, texto: 'digite um CPF valido' }
  return { valido: true, texto: '' }
}

const validarSenha = senha =>
  senha.length < 4 || senha.length > 72
    ? { valido: false, texto: 'Senha deve ter entre 4 e 72 digitos' }
    : { valido: true, texto: '' }

export { validarCPF, validarSenha }
