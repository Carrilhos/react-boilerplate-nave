import styled from 'styled-components'

const ContainerPrincipal = styled.div`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px 5px;
`

const Logo = styled.img`
  height: 37px;
`
const LinkLogout = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 600;
`

export { ContainerPrincipal, Logo, LinkLogout }
