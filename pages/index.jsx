import React from 'react'

import { createGlobalStyle } from 'styled-components'
import config from '../config'

import Header from '../components/Header'
import SectionHero from '../components/SectionHero'
import HowItWorks from '../components/HowItWorks'
import Affiliates from '../components/Affiliates'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'

import DecourSoftBold from '../assets/fonts/DecourSoft-Bold.woff2'
import DecourSoftBlack from '../assets/fonts/DecourSoft-Black.woff2'
import DecourSoftRegular from '../assets/fonts/DecourSoft-Regular.woff2'

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <div className='section-container'>
      <SectionHero />
      <HowItWorks />
      <hr />
      <Benefits />
      <hr />
      <Affiliates />
    </div>
    <Footer />
  </React.Fragment>
)

  const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Decour Soft Regular';
    color: ${config.colors.black};
    background: ${config.colors.white};
  }
  .section-container {
    max-width: 72.5rem;
    margin: 0 auto;
  }
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Decour Soft Bold';
  }
  p {
    font-family: 'Decour Soft Regular';
    font-size: 1rem;
    line-height: 1.5rem;
  }
  h1 {
    font-size: 1.5rem;
    line-height: 1.8125rem;
    @media only screen and (min-width: 1100px) {
      font-size: 2.25rem;
      line-height: 2.6875rem;
    }
  }
  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  ul {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }
  hr {
    border-top: 0.0625rem solid ${config.colors.purple};
    margin: 1.25rem auto;
    width: 20rem;
    @media only screen and (min-width: 1100px) {
      width: 100%;
    }
  }
  .section-title {
    color: ${config.colors.purple};
    font-size: 0.875rem;
    line-height: 1.1875rem;
    max-width: 20rem;
    margin: 1rem auto 1rem;
    width: 100%;
    @media only screen and (min-width: 1100px) {
      margin: 0 auto 2rem;
      max-width: none;
    }
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Decour Soft Regular';
    src: url('${DecourSoftRegular}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Decour Soft Bold';
    src: url('${DecourSoftBold}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Decour Soft Black';
    src: url('${DecourSoftBlack}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;