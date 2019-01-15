
import React from 'react';
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

export const Desktop = styled.div`
  display: none;

  @media only screen and (min-width: 1100px) {
    display: block;
  }
`

export const Mobile = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export const MobileAndTablet = styled.div`
  display: none;

  @media only screen and (max-width: 1100px) {
    display: block;
  }
`

export const Tablet = styled.div`
  display: none;

  @media only screen and (min-width: 600px) and max-width(1100px) {
    display: block;
  }
`

export const TabletAndDesktop = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: block;
  }
`
