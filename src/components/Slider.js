import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Homepage = styled.div``;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media (max-width: 550px) {
    height: 100vh;
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

const AssetVideo = styled.div`
  background-color: #000;
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: top center;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`

const VideoHolder = styled.div`
  height: calc(100% - 86px);
  padding: 0;
  margin: 0;
  width: 100%;
`

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

const Figure = styled.figure`
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
  margin: 24px 0;
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
    background: #000;
    color: #fff;
  }
`;

const Flex = styled.div`
  display: flex;
`

const JustifyCenter = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
`

const SubHeadingUserCount = styled.div`
  position: relative;
  letter-spacing: 0;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`

const RelativeFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const PhotosWrapper = styled.div`
  position: relative;
  top: 0;
  display: none;
  width: auto;
  height: 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`

const PhotosWrapper1 = styled.div`
  position: relative;
  top: 0;
  width: 56px;
  min-width: 64px;
  display: flex;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const RoundPfp = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  position: relative;
`

const RoundPfp1 = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  position: relative;
`

const RoundPfp1Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 9999px;
`

const RoundPfpImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 9999px;
`

const Paragraph = styled.p`
  position: relative;
  white-space: pre;
  display: inline;
  letter-spacing: 0;
  // color: rgb(167, 169, 172);
  color: #fff;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    display: block;
    right: 8px;
    font-size: 16px;
    line-height: 24px;
  }
`

const Slider = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/index/all-users-count');
        setUsers(res.data);
      } catch (err) {}
    };
    getUsers()
  }, [])

  return (
    <Homepage>
      <Hero>
        <Layout>
          {/* <Asset>
            <Figure>
              <AssetImage>
                <Image src="" />
              </AssetImage>
            </Figure>
            <Header>
              <Heading>Co-habit your happy place.</Heading>
              <SubHeading>
                Share a home with inspiring views, private rooms with modern workstations, and refreshing experiences. It's a shared space, but better.
              </SubHeading>
              <Action>
                <LinkA href="/sign-up">Get the experience</LinkA>
              </Action>
              <Flex>
                <JustifyCenter>
                  <SubHeadingUserCount>
                    <RelativeFlex>
                      <PhotosWrapper>
                        {
                          users?.slice(0, 7).map((user, index) => (
                            <RoundPfp key={index}>
                              <RoundPfpImage src={user.profile_photo} />
                            </RoundPfp>
                          ))
                        }
                      </PhotosWrapper>
                      <PhotosWrapper1>
                      {
                          users?.slice(0, 3).map((user, index) => (
                            <RoundPfp1 key={index}>
                              <RoundPfp1Image src={user.profile_photo} />
                            </RoundPfp1>
                          ))
                        }
                      </PhotosWrapper1>
                      <Paragraph>
                        {
                          users.length === 1 ? <>Join {users.length} Cohomie and counting...</> : <>Join {users.length} users and counting...</>
                        }
                      </Paragraph>
                    </RelativeFlex>
                  </SubHeadingUserCount>
                </JustifyCenter>
              </Flex>
            </Header>
          </Asset> */}
          <AssetVideo>
            <VideoHolder>
              <video style={{objectFit: "cover", maxWidth: "100%"}} src='https://hashingmartimages.mo.cloudinary.net/images/g/banner-video-c.mp4' crossOrigin="anonymous" width="100%" height="100%" muted playsInline loop autoPlay />
            </VideoHolder>
            <Header>
              <Heading>Co-habit your happy place.</Heading>
              <SubHeading>
                Share a home with inspiring views, private rooms with modern workstations, and refreshing experiences. It's a shared space, but better.
              </SubHeading>
              <Action>
                <LinkA href="/sign-up">Get the experience</LinkA>
              </Action>
              <Flex>
                <JustifyCenter>
                  <SubHeadingUserCount>
                    <RelativeFlex>
                      <PhotosWrapper>
                        {
                          users?.slice(0, 7).map((user, index) => (
                            <RoundPfp key={index}>
                              <RoundPfpImage src={user.profile_photo} />
                            </RoundPfp>
                          ))
                        }
                      </PhotosWrapper>
                      <PhotosWrapper1>
                      {
                          users?.slice(0, 3).map((user, index) => (
                            <RoundPfp1 key={index}>
                              <RoundPfp1Image src={user.profile_photo} />
                            </RoundPfp1>
                          ))
                        }
                      </PhotosWrapper1>
                      <Paragraph>
                        {
                          users.length === 1 ? <>Join {users.length} Cohomie and counting...</> : <>Join {users.length} users and counting...</>
                        }
                      </Paragraph>
                    </RelativeFlex>
                  </SubHeadingUserCount>
                </JustifyCenter>
              </Flex>
            </Header>
          </AssetVideo>
        </Layout>
      </Hero>
    </Homepage>
  );
};

export default Slider;
