import React from "react";
import styled from "styled-components";

const Homepage = styled.div``;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media (max-width: 550px) {
    height: 80vh;
    // display: none;
  }
`;

const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media (max-width: 1420px) {
    padding: 0;
  }
`;

const Asset = styled.div`
  background-color: #f1f1f1;
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: top center;
  padding-top: 56.25%;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const AssetVideo = styled.div`
  background-color: #f1f1f1;
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: top center;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Figure = styled.figure`
  height: calc(100% - 86px);
  padding: 0;
  margin: 0;
  width: 100%;
`;

const VideoHolder = styled.div`
  height: calc(100% - 86px);
  padding: 0;
  margin: 0;
  width: 100%;
`;

const AssetImage = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top center;
  width: 100%;
  opacity: 1;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 80px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -3.2px;
  line-height: 1;
  margin: 0;
  z-index: 2;
  // width: 65%;
  max-width: 521px;

  // @media (max-width: 1420px) {
  //   width: 70%;
  // }

  @media (max-width: 769px) {
    width: 100%;
    font-size: 45px;
  }
`;

const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  letter-spacing: -0.3px;
  line-height: 1.29;
  margin: 24px 0 12px;
  max-width: 600px;
  z-index: 2;
  // width: 65%;
  max-width: 521px;
  padding: 0 24px;

  // @media (max-width: 1420px) {
  //   width: 60%;
  // }

  @media (max-width: 769px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Action = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
  z-index: 2;
`;

const LinkA = styled.a`
  border: 0;
  cursor: pointer;
  font-size: 16px;
  padding: 0 24px;
  position: relative;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  height: 40px;
  background: #fff;
  color: var(--color-primary);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 40px;

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }
`;

const MobileHero = styled.section`
  display: none;
  position: relative;
  width: 100%;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }
`;

const MobileHeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const MobileHeroFigure = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

const MobileHeroFigureAsset = styled.div`
  padding-top: 100%;
  background-color: #f1f1f1;
  display: flex;
  position: relative;
  height: calc(100% - 36px);
  padding: 0;
  margin: 0;
  width: 100%;
`;

const MobileAssetVideo = styled.div`
  padding-top: 100%;
  background-color: #f1f1f1;
  display: flex;
  position: relative;
  height: calc(70vh - 50px);
  padding: 0;
  margin: 0;
  width: 100%;
`;

const MobileHeroAssetImageDiv = styled.div`
  width: 100%;
  object-position: center;
`;

const MobileAssetVideoHolder = styled.div`
  width: 100%;
`;

const MobileHeroAssetImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top center;
  width: 100%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  aspect-ratio: 800 / 800;
`;

const MobileHeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto;
  height: 100%;
  width: 100%;

  @media (max-width: 550px) {
    margin: 12px 0 0;
    padding: 0 12px;
    height: auto;
  }
`;

const MobileHeroHeaderDiv = styled.div`
  bottom: 108px;
  display: inline-flex;
  flex-direction: column;
  padding: 0;
  position: sticky;
  width: 100%;
  z-index: 2;
  align-items: center;
  margin: 24px auto;
`;

const MobileHeroH1 = styled.h1`
  font-size: 36px;
  letter-spacing: -1.6px;
  line-height: 1.08;
  text-align: center;
`;

const MobileHeroH2 = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.54;
  letter-spacing: -0.3px;
  margin: 16px auto 0;
  max-width: 600px;
  text-align: center;
`;

const MobileHeroCtaDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
`;

const MobileHeroLink = styled.a`
  background: var(--color-primary);
  border: 0;
  color: var(--color-secondary);
  cursor: pointer;
  font-size: 16px;
  padding: 0 24px;
  position: relative;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 40px;

  &:hover {
    background: var(--brand-blue);
    color: #fff;
  }
`;

const Video = styled.video``;

const Slider = () => {
  return (
    <Homepage>
      <Hero>
        <Layout>
          <Asset>
            <Figure>
              <AssetImage>
                <Image src="https://www.datocms-assets.com/53643/1675749803-landing-hero-vail-poster.jpeg" />
              </AssetImage>
            </Figure>
            <Header>
              <Heading>Reignite your happy place.</Heading>
              <SubHeading>
                Share a home with inspiring views, modern
                workstations, restful beds, hotel-grade cleaning and 24/7
                concierge service. It's a vacation home, but better.
              </SubHeading>
              <Action>
                <LinkA>Get the experience</LinkA>
              </Action>
            </Header>
          </Asset>
        </Layout>
      </Hero>
    </Homepage>
  );
};

export default Slider;
