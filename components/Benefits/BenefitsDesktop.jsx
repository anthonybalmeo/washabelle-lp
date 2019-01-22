import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

const BenefitsComponentList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`

const BenefitsComponentListItem = styled.li`
  flex: 1 1;
  margin: 1rem 0;
  margin-right: 1rem;
  box-shadow: 0px 3px 10px ${config.colors.gray};
  border: 1px solid ${config.colors.black};

  &:last-child {
    margin-right: 0;
  }
`
const BenefitsComponentImageContainer = styled.div`
  background: ${config.colors.purple};
  color: white;
  margin-bottom: 20px;
  text-align: left;

  &:after {
    content: '';
    display: block;
    position: relative;
    height: 14px;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 60%,rgba(255,255,255,1) 70%,rgba(255,255,255,1) 100%), ${config.colors.purple};
    background-repeat: repeat-x;
    background-size: 31px 30px;
    background-position: -1px -16px;
    z-index: 3;
  }
`

const BenefitsComponentImage = styled.div`
  padding: 1rem;
`

const BenefitsComponentCopyContainer = styled.div`
  background: ${config.colors.white};
`

export const BenefitsDesktop = (props) =>
  <BenefitsComponentList>
  {
    props.BenefitsFixture.map(({ copy, image }, i) => (
      <BenefitsComponentListItem key={i}>
        <BenefitsComponentImageContainer>
          <BenefitsComponentImage><FontAwesomeIcon icon={faAdjust} size='2x' /></BenefitsComponentImage>
        </BenefitsComponentImageContainer>
        <BenefitsComponentCopyContainer>
          <p>{copy}</p>
        </BenefitsComponentCopyContainer>
      </BenefitsComponentListItem>
    ))
  }
</BenefitsComponentList>
