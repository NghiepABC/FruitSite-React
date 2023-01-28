import styled from "styled-components"
import PageHeading from "../Components/PageHeading"
import ContactInfor from "../Components/ContactInfor"
import Map from "../Components/Map"
import ContactForm from "../Components/ContactForm"

const Container = styled.div`
`

const Title = `Contact Us`

const Contact = () => {
  return (
    <Container>
      <PageHeading Title={Title}/>
      <ContactInfor/>
      <Map/>
      <ContactForm/>
    </Container>
  )
}

export default Contact