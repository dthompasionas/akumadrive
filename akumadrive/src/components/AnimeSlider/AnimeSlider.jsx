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
// import devilsPartTime from "../../assets/images/devils-a-part-timer.jpg";
// import foodWars from "../../assets/images/Food-Wars-Shokugeki-no-Soma.jpg";
// import shieldHero from "../../assets/images/rising-shield-hero.jpg";

import Container from "react-bootstrap/esm/Container";
import "./AnimeSlider.css";

const AnimeSlider = () => {
  // set state
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime?filter=bypopularity", {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "616199d000msh3bacd729db7065bp112f92jsnaa522a896bec",
      //   "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
        console.log("info changed", data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* sets a loading message while waiting for slider to appear */}
      {info.length === 0 ? (
        <div>Loading...</div>
      ) : (
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
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1281: {
                slidesPerView: 7,
                spaceBetween: 35,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="mySwiper"
          >
            {/* creates the cards and adds data from anime db */}
            {info.map((animeData, index) => (
              <SwiperSlide key={index}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <img
                    src={animeData.images.jpg.large_image_url}
                    loading="lazy"
                    alt={`Anime ${index}`}
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <Card.Body>
                    <Card.Title>{animeData.title}</Card.Title>
                    <Card.Text>{animeData.synopsis}</Card.Text>
                    <div className="genre">
                      {animeData.genres.slice(0, 3).map((genre, genreIndex) => (
                        <span key={genreIndex} className="genre-tag">
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
                <Card.Title className="outer-title">
                  {animeData.title}
                </Card.Title>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}
    </>
  );
};

export default AnimeSlider;
