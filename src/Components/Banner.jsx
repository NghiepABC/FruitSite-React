import styled from "styled-components";
import { Wrapper } from "../Pages/Home";
import { Row } from "./CommonComps";
import Banner1 from "../Resource/banner-1.jpg"
import Banner2 from "../Resource/banner-2.jpg"

const Banners = [Banner1, Banner2]

const Container = styled.div`
`

const BannerBlock = styled.img`
    width: 50%;
    flex: 0 0 50%;
    padding: 0 15px;
    margin-top: 95px;

    @media screen and (max-width: 575px){
        width: 100%;
        flex: 0 0 100%;
        margin-top: 30px;
    }
`

const Banner = () => {
    return(
        <Container>
            <Wrapper>
                <Row>
                    {
                        Banners.map((item) => {
                            return <BannerBlock key={item} src={item}/>
                        })
                    }
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Banner