import React, { useState, useEffect, Fragment } from 'react'
import { listarNavers } from 'services/auth'
import { Modal, makeStyles } from '@material-ui/core'

import * as moment from 'moment'
import 'moment/locale/pt-br'

import Header from 'components/Header'
import {
  SpotlightNaverDetail,
  Description,
  NameNaverDetails,
  DevImg,
  NaverRole,
  IconContainer,
  NaverName,
  Naver,
  Topo,
  NaversContainer,
  ButtonImg,
  ImgNaver,
  IconButton,
  Details
} from 'routes/ListNavers/styles'
import HeaderButton from 'components/HeaderButton'
import TextH1Comp from 'components/TextH1'

import { IoMdTrash } from 'react-icons/io'
import { FaPen } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 1007,
    height: 503,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    flexDirection: 'row',
    display: 'flex'
  }
}))

const ListAllNavers = () => {
  const [navers, setNavers] = useState([])
  const [naverSelecionado, setNaverSelecionado] = useState({})
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const handleOpen = naver => {
    setNaverSelecionado(naver)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const loadNavers = async () => {
      try {
        setNavers(await listarNavers())
      } catch (e) {
        console.log('deu ruim ')
      }
    }
    loadNavers()
  }, [])

  return (
    <Fragment>
      <Header />
      <Topo>
        <TextH1Comp name='Navers'></TextH1Comp>
        <HeaderButton name='Adicionar Naver' />
      </Topo>
      <NaversContainer>
        {navers.map(naver => {
          return (
            <Naver key={naver.id}>
              <ButtonImg
                onClick={() =>
                  handleOpen({
                    name: naver.name,
                    url: naver.url,
                    jobRole: naver.jobRole,
                    birthdate: naver.birthdate,
                    admissionDate: naver.admission_date,
                    project: naver.project
                  })
                }
              >
                <ImgNaver src={naver.url} />
              </ButtonImg>
              <NaverName> {naver.name} </NaverName>
              <NaverRole> {naver.job_role} </NaverRole>
              <IconContainer>
                <IconButton>
                  <IoMdTrash size={19} />
                </IconButton>
                <IconButton>
                  <FaPen size={15} />
                </IconButton>
              </IconContainer>
            </Naver>
          )
        })}

        {open && (
          <Modal open={open} onClose={handleClose}>
            <div className={classes.paper}>
              <div>
                <DevImg src={naverSelecionado.url} />
              </div>
              <Details>
                <NameNaverDetails>{naverSelecionado.name}</NameNaverDetails>
                <SpotlightNaverDetail>Idade</SpotlightNaverDetail>
                <Description>{moment(naverSelecionado.birthdate).fromNow(true)}</Description>
                <SpotlightNaverDetail>Tempo de empresa</SpotlightNaverDetail>
                <Description>{moment(naverSelecionado.admissionDate).fromNow(true)}</Description>
                <SpotlightNaverDetail>Projetos que participou</SpotlightNaverDetail>
                <Description>{naverSelecionado.project}</Description>
                <IconContainer>
                  <IconButton>
                    <IoMdTrash size={19} />
                  </IconButton>
                  <IconButton>
                    <FaPen size={15} />
                  </IconButton>
                </IconContainer>
              </Details>
            </div>
          </Modal>
        )}
      </NaversContainer>
    </Fragment>
  )
}

export default ListAllNavers
