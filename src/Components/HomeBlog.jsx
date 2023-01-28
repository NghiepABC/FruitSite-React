import styled, { css } from "styled-components"
import {Wrapper} from "../Pages/Home"
import {Row} from "./CommonComps"
import { Heading } from "./CommonComps"
import { Blogs } from "../data/general_data" 
import { CalendarToday, ChatBubbleOutline } from "@mui/icons-material"

const Container = styled.div`
    margin-top: 80px;
`

const Title = `From The Blog`

const Body = styled.div`
    margin-top: 30px;
    padding-bottom: 86px;
    display: flex;
    flex-wrap: wrap;
`

const BlogItem = styled.div`
    margin-top: 25px;
    padding: 0 15px;
    width: 33.33333333%;
    flex: 0 0 33.3333333%;

    @media (max-width: 767px){
        width: 50%;
        flex: 0 0 50%;
    }
`

const BlogImg = styled.img`
    width: 100%;
`

const BlogInfoCss = css`
    display: flex;
    align-items: center;
    color: #b2b2b2;
`

const BlogInfo = styled.div`
    display: flex;
    align-items: center;
`

const BlogDate = styled.span`
    ${BlogInfoCss}
`

const BlogComment = styled.p`
    ${BlogInfoCss}
    margin-left: 18px;
`

const BlogHeading = styled.h3`
    text-transform: capitalize;
`

const BlogDesc = styled.p``

const IconCss = {
    fontSize:"16px", 
    marginRight: "4px"
}

const HomeBlog = () => {
  return (
    <Container>
        <Wrapper>
            <Row>
                <Heading>
                    {Title}
                </Heading>
            </Row>
            <Row>
                <Body>
                    {Blogs.map(Blog => (
                        <BlogItem key={Blog.id}>
                            <BlogImg src={Blog.imgURL}/>
                            <BlogInfo>
                                <BlogDate>
                                    <CalendarToday style={{...IconCss}}/>
                                    {Blog.dateCreated}
                                </BlogDate>
                                <BlogComment>
                                    <ChatBubbleOutline style={{...IconCss, marginTop: "1px"}}/>
                                    {Blog.commented}
                                </BlogComment>
                            </BlogInfo>
                            <BlogHeading>{Blog.heading}</BlogHeading>
                            <BlogDesc>{Blog.desc}</BlogDesc>
                        </BlogItem>))}
                </Body>
            </Row>
        </Wrapper>
    </Container>
  )
}

export default HomeBlog