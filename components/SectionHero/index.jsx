import React from 'react'
import styled from 'styled-components'
import config from '../../config'
import sectionHero from './section-hero.jpg'
import headerLogo from '../../assets/washabelle-icon.png'
import { Desktop } from '../MediaQueries'
import { PurpleButton } from '../Button'

const SectionHeroComponent = styled.section`
  background: ${config.colors.white};
  margin-top: 136px;
`

const HeroContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 20rem;
  width: 100%;

  @media only screen and (min-width: 1100px) {
    max-width: none;
    flex-direction: row;
  }
`
const HeroColumn = styled.div`
  align-self: center;
  flex: 1 0;

  &:first-child {
    text-align: center;
    background-color: ${config.colors.white};
    color: ${config.colors.purple};
    margin-right: 1.5rem;
  }

  &:last-child {
    flex-basis: 20%;
  }
`

const HeroImage = styled.img`
  display: block;
  width: 100%;
`

const HeroIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 4.5rem;
`

const HeroTitle = styled.h1`
  margin: 0 auto 40px;

  @media only screen and (min-width: 1100px) {
    margin: 20px auto 40px;
  }
`

const SectionHero = () => (
  <SectionHeroComponent>
    <div className='section-container'>
      <HeroContainer>
        <HeroColumn>
          <Desktop>
            <HeroIcon src={headerLogo} />
          </Desktop>
          <HeroTitle>Washabelle Affiliate&nbsp;Program</HeroTitle>
          <PurpleButton bottom={60} href='https://washabelle.com/'>Join Now</PurpleButton>
        </HeroColumn>
        <HeroColumn>
          <HeroImage src={sectionHero} />
        </HeroColumn>
      </HeroContainer>
    </div>
  </SectionHeroComponent>
)

export default SectionHero