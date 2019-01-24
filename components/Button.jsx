import styled from 'styled-components'
import { config } from '../config'

export const Button = styled.a`
  font-family: 'Decour Soft Bold';
  display: block;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => (`${props.top}px` || 0)};
  margin-bottom: ${props => (`${props.bottom}px` || 0)};
  padding: 0.75rem 0;
  width: 13.25rem;
  background-color: ${config.colors.white};
  color: ${config.colors.black};
  border-radius: 0.1875rem;
  text-decoration: none;
  text-align: center;
`

export const PurpleButton = styled(Button)`
  background: ${config.colors.purple};
  color: ${config.colors.white};
`

export const BlueButton = styled(Button)`
  background: ${config.colors.blue};
  color: ${config.colors.white};
`
