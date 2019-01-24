import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const HowItWorksList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
`

const HowItWorksListItem = styled.li`
  flex: 1 1;
  margin: 1rem;
`

const HowItWorksNumber = styled.div`
  flex: 1 1;
  font-size: 2rem;
  margin-bottom: 1.4375rem;

  span {
    display: block;
    width: 3.75rem;
    line-height: 3.5rem;
    border-radius: 50%;
    border: 0.1875rem solid ${config.colors.black};
    margin: 0 auto;
  }
`

const HowItWorksTitle = styled.h3`
  margin-bottom: 0.625rem;
`
const HowItWorksCopy = styled.p`
  margin: 0 auto;
  max-width: 20.625rem;
`
const HowItWorksContainer = styled.div`
  margin: 0 auto;
  max-width: 20rem;
`

export const HowItWorksMobile = (props) =>
  <HowItWorksList>
  {
    props.howItWorksFixture.map(({ title, copy }, i) => (
      <HowItWorksListItem key={i}>
        <HowItWorksContainer>
          <HowItWorksNumber>
            <span>{i+1}</span>
          </HowItWorksNumber>
          <HowItWorksTitle>{title}</HowItWorksTitle>
          <HowItWorksCopy>{copy}</HowItWorksCopy>
        </HowItWorksContainer>
      </HowItWorksListItem>
    ))
  }
  </HowItWorksList>