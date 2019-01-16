import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'

const AffiliatesComponent = styled.section`
  background: ${config.colors.white};
  margin-top: 64px;
`

export const Affiliates = () =>
  <React.Fragment>
    <AffiliatesComponent>
      <h5>What our affiliates say about us</h5>
    </AffiliatesComponent>
  </React.Fragment>
