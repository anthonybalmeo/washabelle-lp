import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import { config } from '../config'

import { Header } from '../components/Header'
import { SectionHero } from '../components/SectionHero'
import { HowItWorks } from '../components/HowItWorks'
import { Affiliates } from '../components/Affiliates'
import { Benefits } from '../components/Benefits'
import { Footer } from '../components/Footer'

import DecourSoftBold from '../assets/fonts/DecourSoft-Bold.woff2'
import DecourSoftBlack from '../assets/fonts/DecourSoft-Black.woff2'
import DecourSoftRegular from '../assets/fonts/DecourSoft-Regular.woff2'

export default () =>
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
    max-width: 1160px;
    margin: 0 auto;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    font-family: 'Decour Soft Regular';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Decour Soft Bold';
  }

  ul {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  hr {
    border-top: 1px solid ${config.colors.purple};
    margin: 20px auto;
    width: 65%;

    @media only screen and (min-width: 1100px) {
      width: 100%;
    }
  }

  .section-title {
    color: ${config.colors.purple};
    font-size: 14px;
    line-height: 19px;
    max-width: 280px;
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
