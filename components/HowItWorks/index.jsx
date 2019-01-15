import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const HowItWorksComponent = styled.section`
  margin-top: 64px;
`

const HowItWorksHeader = styled.h1`
  color: ${config.colors.purple};
  text-align: center;
`
const HowItWorksList = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
`

const HowItWorksListItem = styled.li`
  flex: 1 1;
`

const howItWorksFixture = [
  {
    title: 'Join Team Washabelle',
    copy: 'Get access to promo materials, complete and convenient statistics and excellent customer service.',
  },
  {
    title: 'Advertise',
    copy: 'Enjoy a range of promo materials that you can upload to your blog, instagram or website. Share exclusive promo codes with your followers.',
  },
  {
    title: 'Earn Money',
    copy: 'Get 10% commission for every product sold Char-ching!.',
  },
]

export const HowItWorks = () =>
  <React.Fragment>
    <HowItWorksComponent>
      <HowItWorksHeader>How It Works</HowItWorksHeader>
      {
        <HowItWorksList>
        {
          howItWorksFixture.map(({ title, copy }, i) => (
            <HowItWorksListItem key={i}>
              <h1>{i+1}</h1>
              <h3>{title}</h3>
              <p>{copy}</p>
            </HowItWorksListItem>
          ))
        }
        </HowItWorksList>
      }
    </HowItWorksComponent>
  </React.Fragment>
