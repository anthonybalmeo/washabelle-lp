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
    max-width: 270px;
    border-top: 1px dashed ${config.colors.black};
    transform: translate(60px,30px);
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
  margin-bottom: 23px;

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
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
`
const HowItWorksCopy = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
  max-width: 330px;
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