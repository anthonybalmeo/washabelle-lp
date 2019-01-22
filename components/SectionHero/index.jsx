import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import placeholder from '../../assets/placeholder-square.jpg'

const SectionHeroComponent = styled.section`
  background: ${config.colors.white};
  margin-top: 100px;
`

const HeroContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
`
const HeroColumn = styled.div`
  flex: 1 0;

  &:first-child {
    background-color: ${config.colors.purple};
    color: ${config.colors.white};
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

export const SectionHero = () =>
  <React.Fragment>
    <SectionHeroComponent>
      <div className='section-container'>
        <HeroContainer>
          <HeroColumn>
            Washabelle Affiliate Program
          </HeroColumn>
          <HeroColumn>
            <HeroImage src={placeholder} />
          </HeroColumn>
        </HeroContainer>
      </div>
    </SectionHeroComponent>
  </React.Fragment>
