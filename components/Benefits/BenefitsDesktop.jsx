import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const BenefitsComponentList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`

const BenefitsComponentListItem = styled.li`
  box-shadow: 0 0 20px 0 rgba(213, 213, 213, 50);
  flex: 1 1;
  height: 350px;
  margin: 1rem 0;
  margin-right: 1rem;

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

const BenefitsComponentCopyContainer = styled.div`
  background: ${config.colors.white};
`

const BenefitsCopy = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 1rem 1.5rem 0;
`

const BenefitsComponentImage = styled.img`
  width: 100%;
  max-width: 72px;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.3125rem;
`

export const BenefitsDesktop = (props) =>
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
