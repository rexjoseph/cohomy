import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Section = styled.section`
  margin-top: 8rem;
  max-width: 1176px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2.4rem;

  @media (min-width: 744px) {
    padding-left: 56px;
    padding-right: 56px;
  }
`

const Grid = styled.div`
  @media (min-width: 1128px) {
    display: grid;
    grid-column-gap: 124px;
    grid-template-columns: 1fr 308px;
  }
`

const Main = styled.main`

`

const DivAfMain = styled.div`
  margin-bottom: 8rem;

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const EmptySection = styled.section`
  
`

const TermsH1 = styled.h1`
  margin: 0px;
  padding: 0px;

  font-size: 3.2rem;
  line-height: 36px;
  font-weight: 600;
  color: var(--color-primary);
`

const Div = styled.div``

const ContentDiv = styled.div`
  font-size: 1.5rem;
  line-height: 24px;
  font-weight: 300;
`

const ContentP = styled.p`
  margin: 8px 0 16px;
`

const SideBar = styled.div`
  padding-top: 3.4rem;
`

const SideBarDiv = styled.div`
  display: none;

  @media (min-width: 1128px) {
    display: block;
  }
`

const SideBarDivOne = styled.div`
  border: 1px solid #ddd;
  padding: 1.6rem;
  border-radius: 12px;
`

const SideBarDivContent = styled.div`
  margin-bottom: 1.6rem;
  font-size: 1.5rem;
  line-height: 20px;
  font-weight: 300;
`

const SideBarLink = styled.a`
  border-radius: .8rem;
  border-width: 1px;
  border-style: solid;
  transition: box-shadow 0.2s ease,transform 0.1s ease;
  border-color: var(--btn-linear-gradient);
  background: var(--btn-linear-gradient);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  text-align: center;
  margin: 0;
  outline: none;
  width: 100%;
  color: var(--color-secondary);
  font-size: 1.4rem;
  line-height: 18px;
  display: inline-block;
  text-decoration: none;
  position: relative;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-primary);
  }
`

const Terms = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Section>
        <Grid>
          <>
            <Main>
              <DivAfMain>
                <EmptySection>
                  <TermsH1>
                    Terms of Service
                  </TermsH1>
                  <Div>
                    <Div>
                      <ContentDiv>
                        <Div>
                          <ContentP>Last Updated: March 9, 2023</ContentP>
                        </Div>
                      </ContentDiv>
                      <ContentDiv>
                        <Div>
                          <ContentP>Thank you for using Coh!</ContentP>
                          <ContentP>These Terms of Service("<b>Terms</b>") are a binding legal agreement between you and Coh that govern your right to use the website, and other offerings from Coh (collectively, the "<b>Coh Platform</b>"). When used in these Terms, "<b>Coh,</b>" "<b>we,</b>" or "<b>our</b>" refers to the Coh entity with whom you are contracting.</ContentP>
                          <ContentP>The Coh Platform offers an online venue that enables users (“<b>Members</b>”) to publish, offer, search for, and book services. Members who publish and offer services are “<b>Natives</b>” and Members who search for, book, or use services are “<b>Explorers</b>.” Natives offer accommodations (“<b>Accommodations</b>”), activities, and events (“<b>Experiences</b>”), and a variety of travel and other services (collectively, “<b>Native Services</b>,” and each Native Service offering, a “<b>Listing</b>”). You must register an account to access and use many features of the Coh Platform, and must keep your account information accurate. As the provider of the Coh Platform, Coh does not own, control, offer or manage any Listings or Native Services. Coh is not a party to the contracts entered into directly between Natives and Explorers, nor is Coh a real estate broker, travel agency,&nbsp;or insurer. Coh is not acting as an agent in any capacity for any Member.</ContentP>
                          <ContentP>If you are a&nbsp;Native, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties that apply to your Native Services.</ContentP>
                          <ContentP></ContentP>
                        </Div>
                      </ContentDiv>
                    </Div>
                  </Div>
                </EmptySection>
              </DivAfMain>
            </Main>
          </>
          <SideBar>
            <SideBarDiv>
              <SideBarDivOne>
                <SideBarDivContent>
                  Get help with your bookings, experiences, account and more.
                </SideBarDivContent>
                <SideBarLink href="/sign-in">
                  Log in or sign up
                </SideBarLink>
              </SideBarDivOne>
            </SideBarDiv>
          </SideBar>
        </Grid>
      </Section>
      <Footer />
    </>
  )
}

export default Terms