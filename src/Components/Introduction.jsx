import { KeyboardArrowDown, Menu, Phone } from "@mui/icons-material"
import styled, { css } from "styled-components"
import { departments } from "../data/general_data"
import { Wrapper } from "../Pages/Home"
import { seperator } from "../commonCss"
import bannerImg from "../Resource/banner-intro.jpg"
import { Row } from "./CommonComps"
import { useContext } from "react"
import { PageContext } from "./Headers"
import { useRef } from "react"

const LeftHeaderList = css`
    padding: 10px 25px 10px 40px;

    @media (max-width: 1199px) {
        padding: 10px 15px 10px 20px;
    }
`

const Container = styled.div`
    margin-top: 22px;
    @media (max-width: 991px) {
        & > div{
            justify-content: center;
        }
    }
`

// Left part
const Left = styled.div`
    width: 25%;
    flex: 0 0 25%;
    padding: 0 15px;

    @media (max-width: 991px) {
        width: 100%;
        flex: 0 0 100%;
    }
`

const DepartmentCon = styled.div`
    @media (max-width: 991px) {
        width: 100%;
        flex: 0 0 100%;
    }
`

const DepartmentHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: #7fad39;
    cursor: pointer;

    ${LeftHeaderList}
`

const DepartmentText = styled.p`
    font-weight: 900;
`

const DepartmentList = styled.ul`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    color: #1c1c1c;
    list-style-type: none;
    border-width: 1px;
    border-style: solid;
    border-color: transparent #ddd #ddd #ddd;
    transition-property: height, padding, border;
    transition-timing-function: ease;
    transition-duration: .5s, .5s, .5s;
    overflow: hidden;
    z-index: 3;
    background: white;
    ${LeftHeaderList}
`

const DepartmentItem = styled.li`
    line-height: 39px;
    cursor: pointer;
    &:hover {
        color: #7fad39;
    }
`

// Right part

const Right = styled.div`
    width: 75%;
    flex: 0 0 75%;
    padding: 0 15px;

    @media (max-width: 991px) {
        width: 100%;
        flex: 1 1 100%;
    }
`

const RightTopIntroCon = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 50px;
    @media (max-width: 992px) {
        margin-top: 34px;
    }

    @media (max-width: 767px) {
        height: auto;
    }
`

const SearchContainer = styled.div`
    position: relative;
    height: 100%;
    width: 610px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 10px 18px;

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 490px;
    }

    @media (max-width: 991px) {
        width: 485px;
    }

    @media (max-width: 767px) {
        height: 50px;
        width: 100%;
        flex: 1 0 100%;
    }
`

const CateBox = styled.div`
    flex: 3;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 22px;
    font-size: 16px;
    ${seperator};
    border-top-color: transparent ;
    border-left-color: transparent ;
    border-bottom-color: transparent ;

    @media (min-width: 1200px){
        & > svg{
            flex-grow: 1;
            padding-left: 22px;
        }
    }

    @media (max-width: 1199px){
        & > svg{
            flex-grow: 0;
            margin-right: 6px;
        }
    }

    @media (max-width: 767px){
        &{
            display: none;
        }
    }
`

const ChosenCate = styled.p`
    flex: 2;
    font-weight: 900;
`

const SearchInput = styled.input`
    flex-basis: 70%;
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 14px;

    @media screen and (max-width: 767px) {
        padding-left: 0;
    }
`

const SearchBtn = styled.button`
    position: absolute;
    padding: 0 30px;
    font-weight: 900;
    border: none;
    right: 0;
    font-size: 16px;
    height: 50px;
    color: white;
    background-color: #7fad39;
    cursor: pointer;
`

const Contact = styled.div`
    flex: 1;
    display: flex;
    height: 50px;
    margin-left: 20px;

    @media (max-width: 767px){
        display: block;
        margin-top: 32px;
        margin-left: 0;
    }
`

const PhoneIconContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    
    & > svg{
        z-index: 2;
    }

    &::after{
        content: "";
        position: absolute;
        width: 50px;
        height: 100%;
        border-radius: 50%;
        background-color: #f5f5f5;
        z-index: 1;
    }

    @media (max-width: 1199px){
        margin-left: 0;
    }

    @media (max-width: 767px){
        height: 100%;
        width: 50px;
        float: left;
        z-index: 1;

        &::after{
            left: 0;
            top: 0;
            z-index: 0;
        }
    }
`

const PhoneNumberContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    @media (max-width: 767px){
        display: block;
        float: left;
        margin-left: 30px;
    }
`

const alignText = css`
    text-align: left;
`

const PhoneNumber = styled.p`
    font-size: 18px;
    font-weight: 900;
    ${alignText}
`

const SupportTime = styled.p`
    font-size: 14px;
    ${alignText}
`

const Banner = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-top: 30px;
    height: 430px;
    padding-left: 75px;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;

    @media (max-width: 767px){
        margin-top: 130px;
    }

    @media screen and (max-width: 480px){
        padding-left: 50px;
    }
`

const BannerText = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 290px;
    @media (max-width: 575px){
        width: 200px;
    }
`

const BannerName = styled.div`
    color: #7fad39;
    letter-spacing: 3px;
    font-weight: 900;
    font-size: 14px;
`

const BannerHeading = styled.h1`
    font-weight: 900;
    font-size: 46px;

    @media (max-width: 575px){
        line-height: 100%;
    }
`

const BannerIntro = styled.p`
    color: #7c7e7c;
`

const BannerRedirectShop = styled.a`
    display: block;
    margin-top: 40px;
    width: max-content;
    text-decoration: none;
    color: white;
    font-weight: 900;
    font-size: 14px;
    padding: 10px 28px;
    background-color: #7fad39;
`

const DepartmentComp = () => {
    let departmentsList, departmentsItem, style;
    let ulBPHeight, ulInsideHeight;
    let ulDefaultHeight = useRef(null)

    const handleDepartmentDropdown = () => {
        departmentsList = document.querySelector(".departmentsList");
        departmentsItem = document.querySelector(".departmentsItem");
        style = window.getComputedStyle(departmentsList);

        if(!ulDefaultHeight.current){
            ulBPHeight = parseInt(
            style.getPropertyValue("padding-top")) 
            + parseInt(style.getPropertyValue("padding-bottom"))
            + parseInt(style.getPropertyValue("border-top"))
            + parseInt(style.getPropertyValue("border-bottom"));

            ulInsideHeight = departments.length * departmentsItem.offsetHeight;

            ulDefaultHeight.current = ulInsideHeight + ulBPHeight;
        }
        

        if(departmentsList.style.display){
            departmentsList.style.removeProperty("display");
            departmentsList.style.removeProperty("padding");
        }

        if(departmentsList.offsetHeight === ulDefaultHeight.current){
            departmentsList.style.height = 0;
            departmentsList.style.padding = `
                0px 
                ${parseInt(style.getPropertyValue("padding-right"))}px 
                0px 
                ${parseInt(style.getPropertyValue("padding-left"))}px
            `;
            setTimeout(function(){
                departmentsList.style.display = "none";
            }, 500)
        }
        else{
            departmentsList.style.height = ulDefaultHeight.current + "px";
        }
    }

    return (
        <Left>
            <DepartmentCon>
                <DepartmentHeader onClick={handleDepartmentDropdown}>
                    <Menu/>
                    <DepartmentText>All Departments</DepartmentText>
                    <KeyboardArrowDown/>
                    <DepartmentList className="departmentsList">
                        {
                            departments.map((department) => {
                                return(
                                    <DepartmentItem className="departmentsItem" 
                                                    key={department.id}>
                                        {department.name}
                                    </DepartmentItem>
                                )
                            })
                        }
                    </DepartmentList>
                </DepartmentHeader>
            </DepartmentCon>
        </Left>
    )
}

const RightTopIntroComp = () => {
    return (
        <RightTopIntroCon>
            <SearchContainer>
                <CateBox>
                    <ChosenCate>All Categories</ChosenCate>
                    <KeyboardArrowDown/>
                </CateBox>
                <SearchInput placeholder="what would you want?"/>
                <SearchBtn>Search</SearchBtn>
            </SearchContainer>
            <Contact>
                <PhoneIconContainer>
                    <Phone/>
                </PhoneIconContainer>
                <PhoneNumberContainer>
                    <PhoneNumber>+65 11.188.888</PhoneNumber>
                    <SupportTime>support 24/7 time</SupportTime>
                </PhoneNumberContainer>
            </Contact>
        </RightTopIntroCon>
    )
}

const RightBottomIntroComp = () => {
    return(
        <Banner style={{backgroundImage: `url(${bannerImg})`}}>
            <BannerText>
                <BannerName>
                    FRUIT FRESH
                </BannerName>
                <BannerHeading>
                    Vegetable 100% Organic
                </BannerHeading>
                <BannerIntro>
                    Free Pickup and Delivery Available
                </BannerIntro>
                <BannerRedirectShop>
                    SHOP NOW
                </BannerRedirectShop>
            </BannerText>
        </Banner>
    )
}

const RightIntroComp = () => {
    const pageCxt = useContext(PageContext)
    return (
        <Right>
            <RightTopIntroComp/>
            {pageCxt.page === "/FruitSite-React" && <RightBottomIntroComp/>}
        </Right>
    )
}

const contextStyle = {
    paddingBottom: 0
}

const Introduction = () => {
  const pageCxt = useContext(PageContext)
  contextStyle.paddingBottom = pageCxt.page === "/" ? 0 : 30
  return (
    <Container style={{...contextStyle}}>
        <Wrapper>
            <Row>
                <DepartmentComp/>
                <RightIntroComp/>
            </Row>
        </Wrapper>
    </Container>
  )
}

export default Introduction