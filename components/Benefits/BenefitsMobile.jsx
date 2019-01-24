import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

const BenefitsComponentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`

const BenefitsComponentListItem = styled.li`
  flex: 1 1;
  margin: 1rem;
  margin-right: 1rem;
  box-shadow: 0px 3px 10px ${config.colors.gray};
  border: 1px solid ${config.colors.black};
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

const BenefitsComponentImage = styled.img`
  width: 100%;
  max-width: 72px;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.3125rem;
`

const BenefitsComponentCopyContainer = styled.div`
  background: ${config.colors.white};
`

export const BenefitsMobile = (props) =>
  <BenefitsComponentList>
  {
    props.BenefitsFixture.map(({ copy, image }, i) => (
      <BenefitsComponentListItem key={i}>
        <BenefitsComponentImageContainer>
          <BenefitsComponentImage src={image} />
        </BenefitsComponentImageContainer>
        <BenefitsComponentCopyContainer>
          <p>{copy}</p>
        </BenefitsComponentCopyContainer>
      </BenefitsComponentListItem>
    ))
  }
</BenefitsComponentList>
