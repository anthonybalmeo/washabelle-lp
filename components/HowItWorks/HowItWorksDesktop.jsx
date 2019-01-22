import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const HowItWorksList = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
`

const HowItWorksListItem = styled.li`
  flex: 1 1;
  margin: 1rem;
`

const HowItWorksNumber = styled.div`
  flex: 1 1;
  font-size: 2rem;

  span {
    display: block;
    width: 3.75rem;
    line-height: 3.5rem;
    border-radius: 50%;
    border: 0.1875rem solid ${config.colors.black};
    margin: 0 auto;
  }
`

export const HowItWorksDesktop = (props) =>
  <HowItWorksList>
  {
    props.howItWorksFixture.map(({ title, copy }, i) => (
      <HowItWorksListItem key={i}>
        <HowItWorksNumber>
          <span>{i+1}</span>
        </HowItWorksNumber>
        <h3>{title}</h3>
        <p>{copy}</p>
      </HowItWorksListItem>
    ))
  }
  </HowItWorksList>