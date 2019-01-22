import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const BenefitsComponentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`

const BenefitsComponentListItem = styled.li`
  flex: 1 1;
  margin: 1rem;
  box-shadow: 0px 3px 10px ${config.colors.gray};
  border: 1px solid ${config.colors.black};
`
const BenefitsComponentImageContainer = styled.div`
  background: ${config.colors.purple};
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
          <p>{image}</p>
        </BenefitsComponentImageContainer>
        <BenefitsComponentCopyContainer>
          <p>{copy}</p>
        </BenefitsComponentCopyContainer>
      </BenefitsComponentListItem>
    ))
  }
</BenefitsComponentList>
