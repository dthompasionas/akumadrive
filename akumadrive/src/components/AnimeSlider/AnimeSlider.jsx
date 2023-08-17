import React, { useState, useEffect } from "react";

// import swiper JS
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

// import card from bootstrap
import Card from "react-bootstrap/Card";

// slider test images -----------
import devilsPartTime from "../../assets/images/devils-a-part-timer.jpg";
import foodWars from "../../assets/images/Food-Wars-Shokugeki-no-Soma.jpg";
import shieldHero from "../../assets/images/rising-shield-hero.jpg";

import Container from "react-bootstrap/esm/Container";
import "./AnimeSlider.css";

// componentDidMount() {
//   fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=10", {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "616199d000msh3bacd729db7065bp112f92jsnaa522a896bec",
//       "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

const AnimeSlider = () => {
  // set state
  const [info, setInfo] = useState({ data: [], meta: {} });

  useEffect(() => {
    fetch(
      "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "616199d000msh3bacd729db7065bp112f92jsnaa522a896bec",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      // .then((data) => setInfo(data))
      .then((data) => {
        setInfo(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(info);

  return (
    <>
      <Container fluid className="swiper-container">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
        >
          {info.data &&
            info.data.map((imageObject, index) => (
              <SwiperSlide key={index}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Body>
                    <img
                      src={imageObject.image}
                      alt={`Anime ${index}`}
                      style={{ maxWidth: "100%" }}
                    />
                    <Card.Title>{imageObject.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {imageObject.subtitle}
                    </Card.Subtitle>
                    <Card.Text>{imageObject.description}</Card.Text>
                    {/* Other card content */}
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </>
  );
};

export default AnimeSlider;
