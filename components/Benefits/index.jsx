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
import { BlueButton } from '../Button'

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
  position: relative;
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
      <BlueButton top={20} bottom={60} href='https://washabelle.com/'>Sign Up</BlueButton>
    </BenefitsComponent>
  </React.Fragment>