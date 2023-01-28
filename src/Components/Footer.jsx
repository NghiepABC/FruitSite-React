import styled, { css } from "styled-components"
import { Wrapper } from "../Pages/Home"
import { Row } from "./CommonComps"
import Logo from "../Resource/logo.png"
import { UsefulLinks } from "../data/general_data"

const Container = styled.div`
    padding-top: 72px;
    background-color: #f3f6fa;
`

const CommonCss = css`
    width: 33.33333333%;
    flex: 0 0 33.33333333%;
    padding: 0 15px;

    @media screen and (max-width: 991px){
        width: 50%;
        flex: 0 0 50%;
    }

    @media screen and (max-width: 575px){
        width: 100%;
        flex: 0 0 100%;
    }
`

const FooterTitle = styled.h4`
    font-weight: 900;
`

const PageInfo = styled.div`
    ${CommonCss}
`

const PageLogo = styled.div``

const Info = styled.div``

const Links = styled.div`
    ${CommonCss}
`

const Contact = styled.div`
    ${CommonCss}
`

const Noti = styled.p`
    font-size: 14px;
    margin-bottom: 30px;
`

const InputBlock = styled.form`
    position: relative;
    margin-bottom: 30px;
`

const InputMail = styled.input`
    width: 100%;
    padding-left: 20px;
    height: 46px;
    font-size: 16px;
    border: 1px solid #e5e5e5;
    outline: none;
`

const SubcribeBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    outline: none;
    border: none;
    padding: 0 26px;
    color: white;
    font-weight: 900;
    background-color: #7fad39;
`

const SocialBlock = styled.div`
`

const SocialItem = styled.a`
    display: inline-block;
    width: 41px;
    height: 41px;
    margin-right: 10px;
    text-align: center;
    background-color: white;
    border-radius: 50%;

    & i{
        line-height: 41px;
    }
`

const AdditionalInfo = styled.div`
    margin-top: 30px;
    padding-top: 24px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    border-top: 1px solid #ddd;
    width: 100%;
    flex: 1 0 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 991px){
        flex-wrap: wrap;
    }
`

const Payment = styled.img`
    object-fit: contain;

    @media screen and (max-width: 991px){
        margin-top: 10px;
    }
`

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Row>
                <PageInfo>
                    <PageLogo>
                        <img src={Logo} alt="" />
                    </PageLogo>
                    <Info>
                        <p>Address: 60-49 Road 11378 New York</p>
                        <p>Phone: +65 11.188.888</p>
                        <p>Email: hello@colorlib.com</p>
                    </Info>
                </PageInfo>
                <Links>
                    <FooterTitle styled={{fontWeight: "900"}}>Useful Links</FooterTitle>
                    {
                        UsefulLinks.map((linkName) => {
                            return (
                                <div key={linkName} style={{display: "inline-block", 
                                            width: "50%",
                                            lineHeight: "32px", 
                                            marginTop: "7px", 
                                            fontSize: 14, 
                                            color: "#1c1c1c"}}>
                                    {linkName}
                                </div>
                            )
                        })
                    }
                </Links>
                <Contact>
                    <FooterTitle>
                        Join Our Newletter Now
                    </FooterTitle>
                    <Noti>
                        Get E-mail updates about our latest shop and special offers.
                    </Noti>
                    <InputBlock>
                        <InputMail placeholder="Enter your email here"/>
                        <SubcribeBtn>SUBCRIBE</SubcribeBtn>
                    </InputBlock>
                    <SocialBlock>
                        <SocialItem>
                            <i class="fa-brands fa-facebook-f"></i>
                        </SocialItem>
                        <SocialItem>
                            <i class="fa-brands fa-instagram"></i>
                        </SocialItem>
                        <SocialItem>
                            <i class="fa-brands fa-twitter"></i>
                        </SocialItem>
                        <SocialItem>
                            <i class="fa-brands fa-pinterest"></i>
                        </SocialItem>
                    </SocialBlock>
                </Contact>
            </Row>
            <Row>
                <AdditionalInfo>
                    <p>Copyright ©2023 All rights reserved | This template is made with  by <a href="https://colorlib.com/" style={{display: "inline-block", textDecoration: "none", color: "#008efe"}}>Colorlib</a></p>
                    <Payment 
                        src="https://themewagon.github.io/ogani/img/payment-item.png" 
                        alt=""/>
                </AdditionalInfo>
            </Row>
        </Wrapper>
    </Container>
  )
}

export default Footer