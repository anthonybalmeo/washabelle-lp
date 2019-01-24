import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from '../MediaQueries'
import { HowItWorksMobile } from './HowItWorksMobile'
import { HowItWorksDesktop } from './HowItWorksDesktop'

const HowItWorksComponent = styled.section`
  margin-top: 3.75rem;

  @media only screen and (min-width: 1100px) {
    margin-top: 5rem;
  }
`

const HowItWorksHeader = styled.h1`
  color: ${config.colors.purple};
  margin-bottom: 3rem;
  text-align: center;
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
      <MobileAndTablet>
        <HowItWorksMobile howItWorksFixture={howItWorksFixture} />
      </MobileAndTablet>
      <Desktop>
        <HowItWorksDesktop howItWorksFixture={howItWorksFixture} />
      </Desktop>
    </HowItWorksComponent>
  </React.Fragment>
