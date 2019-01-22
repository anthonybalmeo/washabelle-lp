import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from '../MediaQueries'
import { BenefitsMobile } from './BenefitsMobile'
import { BenefitsDesktop } from './BenefitsDesktop'

const BenefitsFixture = [
  {
    copy: 'Enjoy our "First Touch Cookie" attribution model. The First Touch model gives 100% of the credit to the marketing effort that drove a visitor to purchase as washabelle.com tracking back 120 days.',
    image: 'svg',
  },
  {
    copy: 'Receive commission payments twice a month, upon reaching a minimum threshold, through PayPal.',
    image: 'svg',
  },
  {
    copy: 'Experience a speedy sign-up process. Membership to Team Washabelle is exclusive offered to pre-approved influencers. Since you are pre-approved, it only takes a couple of minutes to get started!',
    image: 'svg',
  },
  {
    copy: 'You have exclusive promotional rights to one of the world’s first machine washabelle mattress.',
    image: 'svg',
  },
]

const BenefitsComponent = styled.section`
`

const BenefitsButton = styled.button`
  font-family: 'Sweetlife Medium';
  border-radius: 3px;
  background: ${config.colors.blue};
  color: white;
  height: 32px;
  line-height: 36px;
  text-transform: uppercase;
  letter-spacing: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 4rem;
  margin: 0 auto;
  display: block;
`

export const Benefits = () =>
  <React.Fragment>
    <BenefitsComponent>
      <h5>Benefits</h5>
      <MobileAndTablet>
        <BenefitsMobile BenefitsFixture={BenefitsFixture} />
      </MobileAndTablet>
      <Desktop>
        <BenefitsDesktop BenefitsFixture={BenefitsFixture} />
      </Desktop>
      <BenefitsButton>Sign Up</BenefitsButton>
    </BenefitsComponent>
  </React.Fragment>