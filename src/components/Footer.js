import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #fff;
  padding: 2rem;
  font-size: 1.3rem;

  @media (max-width: 500px) {
    padding: 2rem 0;
    font-size: 1.2rem;
  }
`

const FooterDiv = styled.footer`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`

const FooterFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const FooterFlex1 = styled.div``

const FooterFlex2 = styled.div`
  @media (max-width: 500px) {
    border-top: 1px solid rgb(0 0 0 / 14%);
    padding-top: 2rem;
    width: 100%;
  }
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  // @media (max-width: 768px) {
  //   flex-direction: column;
  // }
`

const Li = styled.li``

const Href = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Bspan = styled.span`
  font-weight: 500;
`

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <FooterDiv>
        <FooterFlexDiv>
          <FooterFlex1>
            <Ul>
              <Li>
                &copy;{year}&nbsp;Coh
              </Li>
              <Li>
                <Href href='/for-sdp'>For Single & Divorced parents</Href>
              </Li>
              <Li>
                <Href href='/for-students'>For Students</Href>
              </Li>
              <Li>
                <Href href="/terms">Terms</Href>
              </Li>
              <Li>
                <Href href='/privacy'>Privacy</Href>
              </Li>
              <Li>
                <Href href='mailto:devloperrex@gmail.com' target='_blank'>Contact</Href>
              </Li>
            </Ul>
          </FooterFlex1>
          <FooterFlex2>
            <Ul>
              <Li>
                <Bspan>English (US)</Bspan>
              </Li>
              <Li>
                <Bspan>$&nbsp;
                  <Href>USD</Href>
                </Bspan>
              </Li>
              <Li>
                <Href href='/support-resources'>
                  <Bspan>Support & Resources</Bspan>
                </Href>
              </Li>
            </Ul>
          </FooterFlex2>
        </FooterFlexDiv>
      </FooterDiv>
    </Wrapper>
  )
}

export default Footer