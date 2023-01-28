import styled from "styled-components"
import { Wrapper } from "../Pages/Home"
import { generalBarColor } from "../commonCss"
import { Row } from "./CommonComps"
import { MailComp, ShippingComp, LanguageComp, LoginComp, SocialNetworks } from "./CommonComps"

// Left
const Container = styled.div`
    height: 46px;
    width: 100%;
    ${generalBarColor};

    @media screen and (max-width: 991px) {
        display: none;
    }
`

const Left = styled.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 50%;
    height: 100%;
    line-height: 46px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
    padding: 0 15px;
    line-height: 46px;
`

const HeaderTopMail = styled(MailComp)`
    line-height: 14px;
`

const HeaderTopLanguage = styled(LanguageComp)`
    line-height: 14px;
`

export const GeneralLeft = () => {
    return (
        <Left>
            <HeaderTopMail></HeaderTopMail>
            <ShippingComp/>
        </Left>
    )
}

export const GeneralRight = () => {
    return (
        <Right>
            <SocialNetworks/>
            <HeaderTopLanguage></HeaderTopLanguage>
            <LoginComp/>
        </Right>
    )
}

const HeaderTop = () => {
    return (
        <Container>
            <Wrapper>
                <Row>
                    <GeneralLeft/>
                    <GeneralRight/>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default HeaderTop