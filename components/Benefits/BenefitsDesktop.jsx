import React from 'react'
import styled from 'styled-components'
import config from '../../config'

const BenefitsComponentList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`

const BenefitsComponentListItem = styled.li`
  box-shadow: 0 0 1.25rem 0 rgba(213, 213, 213, 50);
  flex: 1 1;
  height: 21.875rem;
  margin: 1rem 0;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`
const BenefitsComponentImageContainer = styled.div`
  background: ${config.colors.purple};
  color: white;
  margin-bottom: 1.25rem;
  text-align: left;

  &:after {
    content: '';
    background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 60%,rgba(255,255,255,1) 70%,rgba(255,255,255,1) 100%), ${config.colors.purple};
    background-position: -0.3625rem -1rem;
    background-repeat: repeat-x;
    background-size: 2.0375rem 1.875rem;
    display: block;
    height: 0.875rem;
    position: relative;
    z-index: 3;
  }
`

const BenefitsComponentCopyContainer = styled.div`
  background: ${config.colors.white};
`

const BenefitsCopy = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1rem 1.5rem 0;
`

const BenefitsComponentImage = styled.img`
  margin-bottom: 0.3125rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  max-width: 4.5rem;
  width: 100%;
`

const BenefitsDesktop = ({ BenefitsFixture }) => (
  <BenefitsComponentList>
    {
    BenefitsFixture.map(({ id, copy, image }) => (
      <BenefitsComponentListItem key={id}>
        <BenefitsComponentImageContainer>
          <BenefitsComponentImage src={image} />
        </BenefitsComponentImageContainer>
        <BenefitsComponentCopyContainer>
          <BenefitsCopy>{copy}</BenefitsCopy>
        </BenefitsComponentCopyContainer>
      </BenefitsComponentListItem>
    ))
  }
  </BenefitsComponentList>
)

export default BenefitsDesktop
