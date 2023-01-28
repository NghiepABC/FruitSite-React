import styled from "styled-components"
import { Heading, Row } from "../Components/CommonComps"
import { Wrapper } from "../Pages/Home"
import TomatoBg from "../Resource/breadcrumb.jpg"

const Container = styled.div`
    padding: 40px 0;

    & div::after{
        content: none
    }
`

const PageHeading = ({Title}) => {
  return (
    <Container style={{
        backgroundImage: `url(${TomatoBg})`,
        backgroundPosition: "top/center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}>
        <Wrapper>
            <Row>
                <Heading style={{color: "white",fontSize: "46px"}}>
                    {Title}
                    <p style={{fontSize: 16, lineHeight: 0}}>
                        <span style={{position: "relative"}}>
                            Home
                            <span style={
                                {width: 10, 
                                 height: 1, 
                                 top: "50%",
                                 backgroundColor: "white", 
                                 display: "inline-block",
                                 position: "absolute",
                                 marginLeft: 2
                                }}></span> 
                        </span> 
                        <span style={{fontWeight: 300, marginLeft: 18}}>{Title}</span>
                    </p>
                </Heading>
            </Row>
        </Wrapper>
    </Container>
  )
}

export default PageHeading