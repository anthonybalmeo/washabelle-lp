import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const BenefitsComponentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;
`

const BenefitsComponentListItem = styled.li`
  box-shadow: 0 0 1.25rem 0 rgba(213, 213, 213, 50);
  flex: 1 1;
  height: 21.875rem;
  margin: 1rem;
  margin-right: 1rem;
`
const BenefitsComponentImageContainer = styled.div`
  background: ${config.colors.purple};
  color: white;
  margin-bottom: 1.25rem;
  text-align: left;

  &:after {
    content: '';
    background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 60%,rgba(255,255,255,1) 70%,rgba(255,255,255,1) 100%), ${config.colors.purple};
    background-position: -0.1625rem -1rem;
    background-repeat: repeat-x;
    background-size: 2.0375rem 1.875rem;
    height: 0.875rem;
    display: block;
    position: relative;
    z-index: 3;
  }
`

const BenefitsCopy = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1rem 1.5rem 0;
`

const BenefitsComponentImage = styled.img`
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.3125rem;
  max-width: 4.5rem;
  width: 100%;
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
          <BenefitsCopy>{copy}</BenefitsCopy>
        </BenefitsComponentCopyContainer>
      </BenefitsComponentListItem>
    ))
  }
</BenefitsComponentList>
