import { useState } from "react"
import logo from "../Resource/logo.png"
import styled from "styled-components"
import { languages } from "../data/general_data"
import { seperator, generalBarColor } from "../commonCss"
import { Badge } from "@mui/material"
import { KeyboardArrowDown, Person, Mail, BusinessCenter, Favorite} from "@mui/icons-material"

export const Row = styled.div`
    flex: 1;
    display: flex;
    margin-left: -15px;
    margin-right: -15px;

    @media (max-width: 992px) {
        flex-wrap: wrap;
    }
`

// Modify MUI Badge
const badgeStyle = {
    "& .MuiBadge-badge": {
      top: -2,
      right: -4,
      fontSize: 10,
    }
}

// RIGHT - TOP HEADER
const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 35px;
`

const SocialIcon = styled.i`
    padding: 0 12px;
`

export const SocialNetworks = ({className="SocialNetworks"}) => {
    return(
        <Container className={className}>
            <SocialIcon className="fa-brands fa-facebook-f"></SocialIcon>
            <SocialIcon className="fa-brands fa-twitter"></SocialIcon>
            <SocialIcon className="fa-brands fa-instagram"></SocialIcon>
            <SocialIcon className="fa-brands fa-pinterest-p"></SocialIcon>
        </Container>
    )
}

// Language
const LanguageList = styled.ul`
    position: absolute;
    list-style-type: none;
    width: 100%;
    height: 0;
    top: 100%;
    left: 0;
    overflow: hidden;
    transition: all .45s ease;
`

const Languages = styled.div`
    position: relative;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    transition: height .45s ease;
    &:hover > ${LanguageList}{
        height: 200px;
    }
    z-index: 2;
`

const LanguageItem = styled.li`
    text-align: center;
    padding: 10px 0;
    ${generalBarColor};
    &:hover{
        background-color: #d3cfcf;
    }
`

const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 25px;
    ${seperator};
    border-top-color: transparent;
    border-bottom-color: transparent;
`

const Flag = styled.img`
    width: 27px;
    height: 14px;
`

const Language = styled.p`
    width: 64px;
`

export const LanguageComp = ({className="LanguageComp"}) => {
    const [language, setLanguage] = useState(0);

    const handleClickItem = (e) => {
        const itemId = Number(e.target.getAttribute("id"))
        setLanguage((itemId - 1))
    }

    return (
        <Languages className={className}>
            <LanguageContainer>
                <Flag  src={languages[language].flag}></Flag>
                <Language style={{paddingLeft: "12px"}} title={languages[language].language}>
                    {languages[language].language.length <= 8 ? languages[language].language :  languages[language].language.slice(0, 5) + "..."}
                </Language>
                <KeyboardArrowDown style={{fontSize: "12px"}}/>
            </LanguageContainer>
            <LanguageList>
                {
                    languages.map((language)=>{
                        return <LanguageItem 
                                    key={language.id} id={language.id} onClick={handleClickItem}>
                                    {language.language}
                                </LanguageItem>
                    })
                }
            </LanguageList>
        </Languages>
    )
}

// Login
const Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
`

export const LoginComp = ({className="LoginComp"}) => {
    return(
        <Login className={className}>
            <Person style={{paddingRight: "6px"}}/>
            Login
        </Login>
    )
}

// END RIGHT TOP HEADER

// LEFT TOP HEADER
const CompMail = styled.p`
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-right: 26px;
    border-right: 1px solid #ddd;
`

const ShippingPolicy = styled.p`
    font-size: 14px;
    padding-left: 26px;
`

export const MailComp = ({className="MailComp"}) => {
    return (
        <CompMail className={className}>
            <Mail style={{marginRight: "4px", fontSize: "14px"}}/>
            nghiepah17@gmail.com
        </CompMail>
    )
}

export const ShippingComp = ({className="ShippingComp"}) => {
    return (
        <ShippingPolicy className={className}>
            Free Shipping for all Order of $99
        </ShippingPolicy>
    )
}
// END TOP HEADER

// LEFT BOTTOM
// Logo
const HomePage = styled.a`
`

const Logo = styled.img`
`

export const LogoComp = () => {
    return(
        <HomePage href=".">
            <Logo src={logo}></Logo>
        </HomePage>
    )
}

// Right - Item Comp
const ItemContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`

const Items = styled.div`
    display: flex;
`

const Text = styled.p`
    span{
        font-weight: 900;
    }
`

export const ItemComp = ({className="BottomRight"}) => {
    return (
        <ItemContainer className={className}>
            <Items>
                <Badge sx={badgeStyle} style={{transform: "scale(0.95)"}} badgeContent={1} color="success">
                    <Favorite style={{fontSize: "24px"}}/>
                </Badge>
            </Items>
            <Items style={{paddingLeft: "12px", paddingRight: "16px"}}>
                <Badge sx={badgeStyle} style={{transform: "scale(0.95)"}} badgeContent={3} color="success">
                    <BusinessCenter style={{fontSize: "24px"}}/>
                </Badge>
            </Items>
            <Items>
                <Text>item: <span>$150.00</span></Text>
            </Items>
        </ItemContainer>
    )
}

// TTILE OF BIG SECTION
export const Heading = styled.div`
    position: relative;
    font-weight: 900;
    font-size: 36px;
    text-align: center;
    flex: 1;

    &::after{
        content: "";
        position: absolute;
        height: 4px;
        width: 80px;
        top: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: #7fad39;
    }
`
