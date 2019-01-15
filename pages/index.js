import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import { config } from '../config'

import { Header } from '../components/Header'
import { SectionHero } from '../components/SectionHero'
import { Footer } from '../components/Footer'

import SweetlifeMedium from '../assets/fonts/Sweetlife-Medium.woff2'
import GothamBook from '../assets/fonts/Gotham-Book.woff2'
import GothamMedium from '../assets/fonts/Gotham-Medium.woff2'
import GothamBlack from '../assets/fonts/Gotham-Black.woff2'
import FlamaCondensed from '../assets/fonts/FlamaCondensed-Medium.woff2'

export default () =>
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <SectionHero />
    <Footer />
  </React.Fragment>

  const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Gotham Book';

    color: ${config.colors.grayText};
    background: ${config.colors.pageGray};
  }

  ul {
    padding-left: 0;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Sweetlife Medium';
    src: url('${SweetlifeMedium}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('${GothamBook}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Medium';
    src: url('${GothamMedium}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Black';
    src: url('${GothamBlack}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Flama Condensed';
    src: url('${FlamaCondensed}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
