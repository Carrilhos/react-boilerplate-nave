import styled from 'styled-components'

const Topo = styled.div`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 40px;
`

const NaversContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 100px 20px 0px;
`

const ButtonImg = styled.button`
  border: none;
`
const ImgNaver = styled.img`
  width: 280px;
  height: 280px;
`
const Naver = styled.div`
  display: flex;
  flex-direction: column;
`

const NaverName = styled.p`
  margin-top: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
`
const NaverRole = styled.p`
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
`

const IconContainer = styled.div`
  margin-top: 5px;
  margin-left: -4px;
`

const IconButton = styled.button`
  border: none;
  background-color: #fff;
  padding: 3px;
`

const DevImg = styled.img`
  width: 503px;
  height: 503px;
  color: red;
`

const Details = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NameNaverDetails = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`

const SpotlightNaverDetail = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`

export {
  SpotlightNaverDetail,
  Description,
  NameNaverDetails,
  Details,
  DevImg,
  IconButton,
  IconContainer,
  NaverName,
  NaverRole,
  Naver,
  ImgNaver,
  Topo,
  NaversContainer,
  ButtonImg
}
