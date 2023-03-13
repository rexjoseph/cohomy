import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

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

const SupportResources = () => {
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
                    Co-habiting support
                  </TermsH1>
                  <Div>
                    <Div>
                      <ContentDiv>
                        <Div>
                          <ContentP>Last Updated: March 13, 2023</ContentP>
                        </Div>
                      </ContentDiv>
                      <ContentDiv>
                        <Div>
                          <ContentP>Thank you for using Coh!</ContentP>           
                          <ContentP>You can report an explorer, a native, raise complaint, or neighborhood concern here.</ContentP>
                          <ContentP>
                            For help with a booking, billing, or your account, contact Coh Support — our Co-habiting Support team is only available to help with concerns related to home sharing, and experiences.
                          </ContentP>
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
                  Sign in or sign up
                </SideBarLink>
              </SideBarDivOne>
            </SideBarDiv>
          </SideBar>
        </Grid>
      </Section>
    </>
  )
}

export default SupportResources