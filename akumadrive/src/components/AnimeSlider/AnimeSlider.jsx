// import swiper JS
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import card from bootstrap
import Card from "react-bootstrap/Card";

// slider test images -----------
import devilsPartTime from "../../assets/images/devils-a-part-timer.jpg";
import foodWars from "../../assets/images/Food-Wars-Shokugeki-no-Soma.jpg";
import shieldHero from "../../assets/images/rising-shield-hero.jpg";

import Container from "react-bootstrap/esm/Container";
import "./AnimeSlider.css";
import "./AnimeSlider.js";

const AnimeSlider = () => {
  return (
    <>
      <Container fluid className="swiper-container">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                {/* <img src={devilsPartTime} alt="Devils a part timer image" /> */}
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <img src={foodWars} alt="Devils a part timer image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shieldHero} alt="Devils a part timer image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={devilsPartTime} alt="Devils a part timer image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foodWars} alt="Devils a part timer image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shieldHero} alt="Devils a part timer image" />
          </SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default AnimeSlider;
