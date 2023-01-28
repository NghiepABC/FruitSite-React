import styled from "styled-components"
import { Wrapper } from "../Pages/Home"
import { Row } from "./CommonComps"
import {ContactInformations} from "../data/general_data"
import { Phone, LocationOnOutlined,  AccessTimeOutlined, MailOutlineOutlined} from "@mui/icons-material"

const infoIcons = [Phone, LocationOnOutlined, AccessTimeOutlined, MailOutlineOutlined]

const Container = styled.div`
    padding: 80px 0 50px 0;
`

const InforItem = styled.div`
    text-align: center;
    margin-bottom: 30px;

    @media screen and (max-width: 767px) {
        width: 50%;
        flex: 0 0 50%;
    }

    @media screen and (max-width: 575px) {
        width: 100%;
        flex: 0 0 100%;
    }
`

const ItemIcon = styled.div`
    
`

const ItemName = styled.div`
    font-size: 24px;
    font-weight: 900;
    color: #1c1c1c;
`

const ItemContent = styled.div`
    color: #666;
    font-size: 16px;
`

const ContactInfor = () => {
  return (
    <Container>
        <Wrapper>
            <Row style={{justifyContent: "space-between"}}>
                {infoIcons.map((Item, index) => {
                    return (
                        <InforItem key={index}>
                            <ItemIcon>
                                <Item style={{fontSize: 40, color: "#7fad39"}}/>
                            </ItemIcon>
                            <ItemName>{ContactInformations[index].name}</ItemName>
                            <ItemContent>{ContactInformations[index].content}</ItemContent>
                        </InforItem>
                    )
                })}
            </Row>
        </Wrapper>
    </Container>
  )
}

export default ContactInfor