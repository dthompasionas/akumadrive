import React, { useState, useEffect } from "react";

const AnimeData = () => {
  useEffect(() => {
    fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=10", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "616199d000msh3bacd729db7065bp112f92jsnaa522a896bec",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default AnimeData;
