import styled, { css } from "styled-components";
import { Heading, Row } from "./CommonComps";
import { Wrapper } from "../Pages/Home";
import { useState } from "react";

const Title = "Leave Message"

const Container = styled.div`
    padding: 80px 0;
`

const Form = styled.form`
    & > div > div::after{
        display: none;
    }
`

const commonInputBlockStyle = css`
    padding: 0 15px;
    width: 50%;
    flex: 0 0 50%;

    @media screen and (max-width: 767px){
        width: 100%;
        flex: 0 0 100%;
    }
`

const InputBlock = styled.div`
    ${commonInputBlockStyle}
`

const commonInputTagStyle = {
    fontSize: "16px", 
    width: "100%", 
    height: "50px", 
    outline: "none", 
    paddingLeft: "20px",
    color: "#6f6f6f", 
    border: "1px solid #ebebeb",
    borderRadius: "5px",
    marginBottom: "30px"
}

const SubmitBtn = styled.button`
    margin-top: 30px;
    padding: 10px 30px;
    font-size: 18px;
    border: none;
    font-weight: 800;
    letter-spacing: 2px;
    color: white;
    text-transform: uppercase;
    background-color: #88ad39;
    cursor: pointer;
`

const ContactForm = () => {
  const [userName, setUserName] = useState("")
  const [userMail, setUserMail] = useState("")
  const [userMess, setUserMess] = useState("")

  return (
    <Container>
        <Wrapper>
            <Form onSubmit={(e) => {e.preventDefault()}}>
                <Row>
                    <Heading style={{marginBottom: "50px"}}>{Title}</Heading>
                </Row>
                <Row>
                    <InputBlock>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your name" 
                            style={{...commonInputTagStyle}}
                            value={userName}
                            onChange={(e) => {setUserName(e.target.value)}}
                        />
                    </InputBlock>
                    <InputBlock>
                        <input 
                            type="text" 
                            name="Email" 
                            placeholder="Your email" 
                            style={{...commonInputTagStyle}}
                            value={userMail}
                            onChange={(e) => {setUserMail(e.target.value)}}
                        />
                    </InputBlock>
                </Row>
                <Row>
                    <InputBlock style={{width: "100%", flex: "0 0 100%", height: 150}}>
                        <textarea 
                            placeholder="Your message" 
                            style={{...commonInputTagStyle, height: "100%", padding: "12px 2px 2px 20px"}}
                            value={userMess}
                            onChange={(e) => {setUserMess(e.target.value)}}
                        >
                        </textarea>
                    </InputBlock>
                </Row>
                <Row style={{justifyContent: "center"}}>
                    <SubmitBtn type="submit">Send Message</SubmitBtn>
                </Row>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default ContactForm