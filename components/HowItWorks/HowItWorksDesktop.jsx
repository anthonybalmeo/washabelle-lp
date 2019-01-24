import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const HowItWorksList = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 4.375rem;
`

const HowItWorksListItem = styled.li`
  flex: 1 1;
  margin: 0rem 1rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    max-width: 16.875rem;
    border-top: 0.0625rem dashed ${config.colors.black};
    transform: translate(3.75rem, 1.875rem);
    width: 100%;
  }

  &:last-child {
    &:before {
      border-top: 0;
    }
  }
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
  margin-bottom: 1.4375rem;
`
const HowItWorksCopy = styled.p`
  margin: 0 auto;
  max-width: 20.625rem;
`

export const HowItWorksDesktop = (props) =>
  <HowItWorksList>
  {
    props.howItWorksFixture.map(({ title, copy }, i) => (
      <HowItWorksListItem key={i}>
        <HowItWorksNumber>
          <span>{i+1}</span>
        </HowItWorksNumber>
        <HowItWorksTitle>{title}</HowItWorksTitle>
        <HowItWorksCopy>{copy}</HowItWorksCopy>
      </HowItWorksListItem>
    ))
  }
  </HowItWorksList>