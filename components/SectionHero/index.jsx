import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import sectionHero from './section-hero.jpg'
import headerLogo from '../../assets/washabelle-icon.png'

const SectionHeroComponent = styled.section`
  background: ${config.colors.white};
  margin-top: 136px;
`

const HeroContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
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
  width: 72px;
`

const HeroTitle = styled.h1`
  font-size: 36px;
  line-height: 49px;
  margin: 20px auto 40px;
`
const HeroButton = styled.a`
  display: block;
  font-size: 20px;
  line-height: 27px;
  margin: 20px auto 40px;
  padding: 0.75rem 0;
  width: 212px;
  background-color: ${config.colors.purple};
  color: ${config.colors.white};
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
`

export const SectionHero = () =>
  <React.Fragment>
    <SectionHeroComponent>
      <div className='section-container'>
        <HeroContainer>
          <HeroColumn>
            <HeroIcon src={headerLogo} />
            <HeroTitle>Washabelle Affiliate&nbsp;Program</HeroTitle>
            <HeroButton href='#'>Join Now</HeroButton>
          </HeroColumn>
          <HeroColumn>
            <HeroImage src={sectionHero} />
          </HeroColumn>
        </HeroContainer>
      </div>
    </SectionHeroComponent>
  </React.Fragment>
