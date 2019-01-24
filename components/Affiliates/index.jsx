import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import placeholder from '../../assets/placeholder-square.jpg'
import affiliat1 from './affiliate-1.jpg'
import affiliat2 from './affiliate-2.jpg'
import affiliat3 from './affiliate-3.jpg'

const AffiliatesFixture = [
  {
    copy: null,
    image: {
      url: affiliat1,
      description: 'Scarlet Paolicchi, Family Focus Blog',
      alt: 'Alt text'
    },
  },
  {
    copy: 'Washabelle is the first and only machine washable mattress so my followers are excited to hear about this revolutionary product. And it’s nice to make money just by sharing Washabelle’s fantastic content.',
    link: {
      text: 'Love that max blog',
      url: 'https://www.washabelle.com',
    },
    image: null,
  },
  {
    copy: null,
    image: {
      url: affiliat2,
      description: 'Felicia Carter, Go Grow Go',
      alt: 'Alt text'
    },
  },
  {
    copy: 'Thanks to Team washabelle I can recommend the only machine washable dryable mattress out there while monetizing my blog. Selling a great product gives you great results!',
    link: {
      text: 'Love that max blog',
      url: 'https://www.washabelle.com',
    },
    image: null,
  },
  {
    copy: null,
    image: {
      url: affiliat3,
      description: 'Love That Max',
      alt: 'Alt text'
    },
  },
  {
    copy: 'Washabelle is the first and only machine washable mattress so my followers are excited to hear about this revolutionary product. And it’s nice to make money just by sharing Washabelle’s fantastic content.',
    link: {
      text: 'Love that max blog',
      url: 'https://www.washabelle.com',
    },
    image: null,
  },
]

const AffiliatesQuoteContainer = styled.div`
  padding: 0 3.75rem;
`

const AffiliatesComponent = styled.section`
  background: ${config.colors.white};
`
const Quote = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${config.colors.blue};
`

const QuoteCopy = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 1rem;
`

const QuoteLink = styled.a`
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
  text-decoration: none;
  color: ${config.colors.blue};
`
const AffiliatesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
`

const AffiliatesListItem = styled.div`
  align-self: center;
  flex: 1 0 33.33%;
`

const AffiliatesImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
`
const AffiliateImageDescription = styled.div`
  color: ${config.colors.white};
  background-color: ${config.colors.purple};
  font-size: 14px;
  line-height: 30px;
  padding: 1rem;
`

const AffiliatesButton = styled.a`
  display: block;
  font-size: 20px;
  line-height: 27px;
  margin: 60px auto 80px;
  padding: 0.75rem 0;
  width: 212px;
  background-color: ${config.colors.blue};
  color: ${config.colors.white};
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
`

export const Affiliates = () =>
  <React.Fragment>
    <AffiliatesComponent>
      <h5 class='section-title'>What our affiliates say about us</h5>
      <AffiliatesList>
      {
        AffiliatesFixture.map(({copy, link, image}, i) =>
          <AffiliatesListItem key={i}>
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
      }
      </AffiliatesList>
      <AffiliatesButton>Sign up</AffiliatesButton>
    </AffiliatesComponent>
  </React.Fragment>
