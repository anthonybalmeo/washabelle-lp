import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from '../MediaQueries'
import { BenefitsMobile } from './BenefitsMobile'
import { BenefitsDesktop } from './BenefitsDesktop'
import machine from './icon-machine.png'
import trophy from './icon-trophy.png'
import money from './icon-money.png'
import badge from './icon-badge.png'

const BenefitsFixture = [
  {
    copy: 'Enjoy our "First Touch Cookie" attribution model. The First Touch model gives 100% of the credit to the marketing effort that drove a visitor to purchase as washabelle.com tracking back 120 days.',
    image: trophy,
  },
  {
    copy: 'Receive commission payments twice a month, upon reaching a minimum threshold, through PayPal.',
    image: money,
  },
  {
    copy: 'Experience a speedy sign-up process. Membership to Team Washabelle is exclusive offered to pre-approved influencers. Since you are pre-approved, it only takes a couple of minutes to get started!',
    image: badge,
  },
  {
    copy: 'You have exclusive promotional rights to one of the world’s first machine washabelle mattress.',
    image: machine,
  },
]

const BenefitsComponent = styled.section`
`
const BenefitsButton = styled.a`
  font-family: 'Decour Soft Bold';
  display: block;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  margin: 1.25rem auto 3.75rem;
  padding: 0.75rem 0;
  width: 13.25rem;
  background-color: ${config.colors.blue};
  color: ${config.colors.white};
  border-radius: 0.1875rem;
  text-decoration: none;
  text-align: center;
`

export const Benefits = () =>
  <React.Fragment>
    <BenefitsComponent>
      <h5 className='section-title'>Benefits</h5>
      <MobileAndTablet>
        <BenefitsMobile BenefitsFixture={BenefitsFixture} />
      </MobileAndTablet>
      <Desktop>
        <BenefitsDesktop BenefitsFixture={BenefitsFixture} />
      </Desktop>
      <BenefitsButton href='#'>Sign Up</BenefitsButton>
    </BenefitsComponent>
  </React.Fragment>