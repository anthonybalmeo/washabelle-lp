import React from 'react';
import styled from 'styled-components'
import { EmailCapture } from './EmailCapture'
import { config } from '../config'


const FooterComponent = styled.footer`
  background-color: ${config.colors.gray};
`
const FooterEnd = styled.footer`
  background-color: ${config.colors.purple};
  color: white;
  text-align: center;
  padding: 2rem 0;
`

export class Footer extends React.Component {
  render() {
    return (
      <FooterComponent>
        <p>Footer</p>
        <EmailCapture />
        <FooterEnd>
          2018 Washabelle All Rights Reserved
        </FooterEnd>
      </FooterComponent>
      )
  }
}
