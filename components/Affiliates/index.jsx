import React from 'react'
import { config } from '../../config'
import styled from 'styled-components'
import placeholder from '../../assets/placeholder-square.jpg'

const AffiliatesComponent = styled.section`
  background: ${config.colors.white};
  margin-top: 64px;
`
const Quote = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${config.colors.blue};
`

const QuoteLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${config.colors.blue};
`
const AffiliatesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  padding: 1rem;
`

const AffiliatesFixture = [
  {
    copy: null,
    image: {
      url: placeholder,
      description: 'Some Image',
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
      url: placeholder,
      description: 'Some Image',
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
      url: placeholder,
      description: 'Some Image',
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

export const Affiliates = () =>
  <React.Fragment>
    <AffiliatesComponent>
      <h5>What our affiliates say about us</h5>
      <AffiliatesList>
      {
        AffiliatesFixture.map(({copy, link, image}, i) =>
          <AffiliatesListItem key={i}>
            {
              copy && (
              <div>
                <Quote>“</Quote>
                <p>{copy}</p>
                <QuoteLink href={link.url}>{link.text}</QuoteLink>
              </div>
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
    </AffiliatesComponent>
  </React.Fragment>
