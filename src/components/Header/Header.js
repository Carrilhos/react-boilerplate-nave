import React from 'react'

import { ContainerPrincipal, Logo, LinkLogout } from 'components/Header/styles'

import logo from 'assets/logo.png'

const Header = () => {
  return (
    <ContainerPrincipal>
      <Logo src={logo} />
      <LinkLogout to=''>Sair</LinkLogout>
    </ContainerPrincipal>
  )
}

export default Header
