import styled from 'styled-components'
import { Room } from '@mui/icons-material'

const Container = styled.div`
    position: relative;
`

const DetailAdd = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    background-color: white;
    padding: 23px 0;
    width: 350px;

    &::after{
        content: "";
        position: absolute;
        border-width: 20px 10px 10px 10px;
        border-style: solid;
        border-color: white transparent transparent transparent; 
        bottom: -28px;
    }

    @media screen and (max-width: 479px){
        width: auto;
        padding: 0;
    }
`

const CityName = styled.p`
    font-size: 24px;
    font-weight: 900;
`

const PhoneNumber = styled.p`
    font-size: 16px;
    color: #666;
`

const Address = styled.p`
    font-size: 16px;
    color: #666;
`

const Map = () => {
  return (
    <Container>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.505604821965!2d-73.44799090000001!3d40.73174245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82abc086c351f%3A0x1527e912084fc47b!2sFarmingdale%2C%20NY%2011735%2C%20USA!5e0!3m2!1sen!2s!4v1674718318486!5m2!1sen!2s"
            width="100%" 
            height="500" 
            style= {{border: "none",}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title='map'>
            </iframe>
            <DetailAdd>
                <CityName>New York</CityName>
                <PhoneNumber>+01-3-8888-6868</PhoneNumber>
                <Address>16 Creek Ave. Farmingdale, NY</Address>
                <Room 
                    style={{
                        position: "absolute", 
                        left: "50%", 
                        top: "115%", 
                        fontSize: "46px",
                        transform: "translateX(-25%)",
                        color: "#88ad39",
                    }}/>
            </DetailAdd>
    </Container>
  )
}

export default Map