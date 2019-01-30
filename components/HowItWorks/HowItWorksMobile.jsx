import React from 'react'
import styled from 'styled-components'
import config from '../../config'

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

const HowItWorksMobile = ({ howItWorksFixture }) => (
  <HowItWorksList>
    {
      howItWorksFixture.map(({ id, title, copy }) => (
        <HowItWorksListItem key={id}>
          <HowItWorksContainer>
            <HowItWorksNumber>
              <span>{id}</span>
            </HowItWorksNumber>
            <HowItWorksTitle>{title}</HowItWorksTitle>
            <HowItWorksCopy>{copy}</HowItWorksCopy>
          </HowItWorksContainer>
        </HowItWorksListItem>
      ))
    }
  </HowItWorksList>
)

export default HowItWorksMobile