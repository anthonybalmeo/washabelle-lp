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
const BenefitsSectionTitle = styled.h5`
  color: ${config.colors.purple};
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 2rem;
`

const BenefitsButton = styled.a`
  display: block;
  font-size: 20px;
  line-height: 27px;
  margin: 20px auto 60px;
  padding: 0.75rem 0;
  width: 212px;
  background-color: ${config.colors.blue};
  color: ${config.colors.white};
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
`

export const Benefits = () =>
  <React.Fragment>
    <BenefitsComponent>
      <h5 class='section-title'>Benefits</h5>
      <MobileAndTablet>
        <BenefitsMobile BenefitsFixture={BenefitsFixture} />
      </MobileAndTablet>
      <Desktop>
        <BenefitsDesktop BenefitsFixture={BenefitsFixture} />
      </Desktop>
      <BenefitsButton href='#'>Sign Up</BenefitsButton>
    </BenefitsComponent>
  </React.Fragment>