import React from 'react'
import styled from 'styled-components'
import config from '../../config'
import { BlueButton } from '../Button'
import { MobileAndTablet, Desktop } from '../MediaQueries'
import affiliat1 from './affiliate-1.jpg'
import affiliat2 from './affiliate-2.jpg'
import affiliat3 from './affiliate-3.jpg'

const AffiliatesFixture = [
  {
    id: 1,
    copy: null,
    image: {
      url: affiliat1,
      description: 'Audrey Morissette, Mamadrey88',
      alt: '@mamadrey88',
    },
  },
  {
    id: 2,
    copy: 'Washabelle is the first and only machine washable mattress so my followers are excited to hear about this revolutionary product. And it’s nice to make money just by sharing Washabelle’s fantastic content.',
    link: {
      text: 'This Little Wandering Blog',
      url: 'https://www.washabelle.com',
    },
    image: null,
  },
  {
    id: 3,
    copy: null,
    image: {
      url: affiliat2,
      description: 'Lex Valishvili, DailyParenting',
      alt: 'Daily Parenting Blog',
    },
  },
  {
    id: 4,
    copy: 'What could be better than making money while you talk about a product you love. Washabelle is a great company with a dream come true product.',
    link: {
      text: '@mamadrey88',
      url: 'https://www.washabelle.com',
    },
    image: null,
  },
  {
    id: 5,
    copy: null,
    image: {
      url: affiliat3,
      description: 'Kayla Petering, This Little Wandering',
      alt: 'This Little Wandering Blog'
    },
  },
  {
    id: 6, 
    copy: 'The Washabelle Affiliate Program is easy. Just sign up, share their awesome content and start making money. Your followers will love this product.',
    link: {
      text: 'Daily Parenting Blog',
      url: 'https://www.washabelle.com',
    },
    image: null,
  },
]

const AffiliatesQuoteContainer = styled.div`
  padding: 3rem 1.5rem;
  @media only screen and (min-width: 1100px) {
    padding: 0 3.75rem;
  }
`

const AffiliatesComponent = styled.section`
  background: ${config.colors.white};
`
const Quote = styled.div`
  font-family: 'Decour Soft Black';
  font-size: 2rem;
  color: ${config.colors.blue};
`

const QuoteCopy = styled.h5`
  font-family: 'Decour Soft Bold';
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-bottom: 1rem;
`

const QuoteLink = styled.a`
  font-family: 'Decour Soft Black';
  font-size: 0.875rem;
  line-height: 1.875rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${config.colors.blue};
`
const AffiliatesList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  flex-direction: column;
  max-width: 20rem;
  margin: 0 auto;
  width: 100%;

  @media only screen and (min-width: 1100px) {
    max-width: none;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const AffiliatesListItem = styled.div`
  align-self: center;
  flex: 1 0 100%;

  @media only screen and (min-width: 1100px) {
    flex: 1 0 33.33%;
  }
`

const AffiliatesImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
`
const AffiliateImageDescription = styled.div`
  font-family: 'Decour Soft Black';
  color: ${config.colors.white};
  background-color: ${config.colors.purple};
  font-size: 0.875rem;
  line-height: 1.875rem;
  padding: 1rem;
`

const Affiliates = () =>
  (
    <AffiliatesComponent>
      <h5 className='section-title'>What our affiliates say about us</h5>
      <AffiliatesList>
        {
        AffiliatesFixture.map(({id, copy, link, image}) =>
          (
            <AffiliatesListItem key={id}>
              {
                copy && (
                <AffiliatesQuoteContainer>
                  <Quote>“</Quote>
                  <QuoteCopy>{copy}</QuoteCopy>
                  <QuoteLink href={link.url}>{link.text}</QuoteLink>
                </AffiliatesQuoteContainer>
                )
                }
              { image && (
                <React.Fragment>
                  <AffiliatesImage src={image.url} />
                  <AffiliateImageDescription>{image.description}</AffiliateImageDescription>
                </React.Fragment>
              ) }
            </AffiliatesListItem>
          )
        )
      }
      </AffiliatesList>
      <MobileAndTablet>
        <BlueButton top={0} bottom={80} href='https://washabelle.com/'>Sign Up</BlueButton>
      </MobileAndTablet>
      <Desktop>
        <BlueButton top={60} bottom={80} href='https://washabelle.com/'>Sign Up</BlueButton>
      </Desktop>
    </AffiliatesComponent>

  )

  export default Affiliates