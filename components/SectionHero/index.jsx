import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const SectionHeroComponent = styled.section`
  background: ${config.colors.white};
  margin-top: 64px;
`

export const SectionHero = () =>
  <React.Fragment>
    <SectionHeroComponent>
      <p>HERO SECTION</p>
    </SectionHeroComponent>
  </React.Fragment>
