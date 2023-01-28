import styled, { css } from "styled-components"
import { Wrapper } from "../Pages/Home"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Resource/typical-img-1.jpg"
import img2 from "../Resource/typical-img-2.jpg"
import img3 from "../Resource/typical-img-3.jpg"
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Container = styled.div`
    margin-top: 78px;
`

const SliderRow = styled.div`
    margin-left: -15px;
    margin-right: -15px;
`

const SliderCon = styled.div`
    position: relative;
    width: 33.33333333%;
    display: inline-block;
    padding: 0 15px;

    & .slick-slider{
        position: unset;
    }

    & .slick-arrow {
        top: 23px;
    }

    & .slick-arrow.slick-prev{
        left: unset;
        right: 45px;
    }

    & .slick-arrow.slick-next{
        right: 15px;
    }

    & .slick-prev:before, 
    & .slick-next:before {
        color: #d8d1d1;
    }

    @media screen and (max-width: 991px) {
        width: 50%;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

const SliderHeading = styled.h4`
    font-size: 24px;
    font-weight: 900;
    display: flex;
    justify-content: space-between;
`

const SwitchBlock = styled.div`  
    display: flex;
    align-items: center;
`

const SwitchSlideBtn = css`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;

    & svg{
        border: 1px solid #636a85;
        background-color: #f3f6fa;
    }
`

const NextSlideBtn = styled.button`
    ${SwitchSlideBtn}
`

const PrevSlideBtn = styled.button`
    margin-right: 10px;
    ${SwitchSlideBtn}
`

const settings = {
    dots: false,
    infinite: "true",
    autoplay: true,
    autoplayspeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
}

const childSettings = {
    infinite: "true",
    autoPlay: true,
    autoplayspeed: 3000,
    speed: 1500
}

const TypicalSliders = () => {
    const slider1 = useRef(null)
    const slider2 = useRef(null)
    const slider3 = useRef(null)

    return (
        <Container>
            <Wrapper>
                <SliderRow>
                    <SliderCon>
                        <SliderHeading>
                            Latest Product
                            <SwitchBlock>
                                <PrevSlideBtn onClick={() => slider1?.current?.slickPrev()}>
                                    <ChevronLeft/>
                                </PrevSlideBtn>
                                <NextSlideBtn onClick={() => slider1?.current?.slickNext()}>
                                    <ChevronRight/>
                                </NextSlideBtn>
                            </SwitchBlock>
                        </SliderHeading>
                        <Slider ref={slider1} {...settings}>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </SliderCon>
                    <SliderCon>
                        <SliderHeading>
                            Reviewed Product
                            <SwitchBlock>
                                <PrevSlideBtn onClick={() => slider2?.current?.slickPrev()}>
                                    <ChevronLeft/>
                                </PrevSlideBtn>
                                <NextSlideBtn onClick={() => slider2?.current?.slickNext()}>
                                    <ChevronRight/>
                                </NextSlideBtn>
                            </SwitchBlock>
                        </SliderHeading>
                        <Slider ref={slider2} {...settings}>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </SliderCon>
                    <SliderCon>
                        <SliderHeading>
                            Top Bought Product
                            <SwitchBlock>
                                <PrevSlideBtn onClick={() => slider3?.current?.slickPrev()}>
                                    <ChevronLeft/>
                                </PrevSlideBtn>
                                <NextSlideBtn onClick={() => slider3?.current?.slickNext()}>
                                    <ChevronRight/>
                                </NextSlideBtn>
                            </SwitchBlock>
                        </SliderHeading>
                        <Slider ref={slider3} {...settings}>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div {...childSettings}>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img1} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Water Spinach</p>
                                        <p style={{fontWeight: "900"}}>$30.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img2} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Spinach</p>
                                        <p style={{fontWeight: "900"}}>$17.00</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "10px"}}>
                                    <img src={img3} height="110px" width="110px" style={{marginRight: "26px"}} alt="" />
                                    <div>
                                        <p>Pumpkin</p>
                                        <p style={{fontWeight: "900"}}>$10.00</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </SliderCon>
                </SliderRow>
            </Wrapper>
        </Container>
    )
}

export default TypicalSliders