import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  z-index: 1;
  width: 768px;
  height: 569px;
  min-height: 569px;
  background: #102c78 0% 0% no-repeat padding-box;
  opacity: 1;
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    height: 745px;
    min-height: 745px;
  }
  @media screen and (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    height: 745px;
    min-height: 745px;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  width: 277px;
  margin: 50px 23px 0 86.5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    width: 94%;
    margin: 55.66px 0 0 22.75px;
  }
`;
const FooterImg = styled.img`
  width: 39px;
  height: 37px;
  margin: 14px 10px 24.84px 0;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin: 14px 10px 22.45px 0;
  }
`;
const Text = styled.span`
  width: 297px;
  height: 107px;
  text-align: left;
  font: normal normal normal 18px/28px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const SecondColumn = styled.div`
  width: 135px;
  height: 220px;
  display: flex;
  justify-content: space-between;
`;
const SubColOne = styled.div`
  width: 90px;
  margin: 54px 0 0 24px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin: 32px 0 0 24px;
  }
`;
const SubColTwo = styled.div`
  width: 165px;
  margin: 54px 0 0 70px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin: 32px 0 0 70px;
  }
`;
const ColHeading = styled.div`
  width: max-content;
  text-align: left;
  font: normal normal medium 18px/28px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 27px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin-bottom: 17px;
  }
`;
const LinkContainer = styled.div`
  width: 90px;
  height: 172px;
  text-align: left;
`;
const LinkContainerSecond = styled.div`
  width: 165px;
  height: 134px;
  text-align: left;
`;
const Link = styled.a`
  font: normal normal normal 16px/38px Inter;
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
  cursor: pointer;
  text-decoration: none !important;
  :focus{
    color: #8ca6f0;
  }
`;
const ContactRow = styled.div`
  margin: 116px 0 0 407px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin: 96px 0 0 28.95px;
  }
`;
const LinkContainerThird = styled.div`
  width: 95.95px;
  height: 106px;
  margin-bottom: 66.34px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin-bottom: 25.34px;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.img`
  /* width: 17px;
  height: 14px; */
  margin-right: 9px;
  /* background: #8ca6f0 0% 0% no-repeat padding-box; */
  opacity: 1;
`;
const CopyrightContainer = styled.div`
  margin: -52px 0 0 87px;
  display: flex;
  align-items: center;
  height: 15px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    margin: 35px 0 0 28.95px;
  }
`;
const XDCIcon = styled.img`
  width: 116.47px;
  height: 17px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const ImgContainer = styled.div`
 display: flex;
 align-items: center;
 height: 58px;
`;
const OriginText = styled.span`
 font: normal normal 600 27px/28px Inter;
 color: #FFFFFF;
`;

function footer() {
  return (
    <FooterContainer>
      <ColumnContainer>
        <Column>
          <ImgContainer>
            <FooterImg src="/images/Origin-Logo-White.svg" alt="" />
            <OriginText>Origin</OriginText>
          </ImgContainer>
          <Text>
          Origin is a Smart Contract Tokenization platform that enables brands to create Non-Fungible Tokens.
          </Text>
        </Column>
        <SecondColumn>
          <SubColOne>
            <ColHeading>Tools</ColHeading>
            <LinkContainer>
              <Link>SmartMint</Link>
              <Link> SmartView </Link>
              <Link> SmartDrop </Link>
              <Link> SmartLock </Link>
              <Link> SmartStrem</Link>
            </LinkContainer>
          </SubColOne>

          <SubColTwo>
            <ColHeading>Resources</ColHeading>
            <LinkContainerSecond>
              <Link href="https://www.xdc.org/" target="_blank">About XDC</Link>
              <Link href="https://docs.xdc.org/" target="_blank"> Documentation <div></div></Link>
              <Link> Privacy Policy <div></div></Link>
              <Link> Terms and Conditions</Link>
            </LinkContainerSecond>
          </SubColTwo>
        </SecondColumn>
      </ColumnContainer>
      <ContactRow>
        <ColHeading>Contact</ColHeading>
        <LinkContainerThird>
          <ContactContainer>
            <SocialIcon src="/images/Twitter_Footer.svg" />
            <Link href="https://twitter.com/XDCFoundation" target="_blank">Twitter</Link>
          </ContactContainer>
          <ContactContainer>
            <SocialIcon src="/images/Telegram_Footer.svg" />
            <Link> Telegram </Link>
          </ContactContainer>
        </LinkContainerThird>
      </ContactRow>
      <CopyrightContainer>
        <XDCIcon src="/images/Group 12.svg" />
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default footer;
