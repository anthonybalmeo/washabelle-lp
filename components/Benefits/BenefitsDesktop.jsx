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
          <p>{image}</p>
        </BenefitsComponentImageContainer>
        <BenefitsComponentCopyContainer>
          <p>{copy}</p>
        </BenefitsComponentCopyContainer>
      </BenefitsComponentListItem>
    ))
  }
</BenefitsComponentList>
