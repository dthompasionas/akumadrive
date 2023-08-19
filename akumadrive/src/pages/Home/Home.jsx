import Hero from "../../components/Hero/Hero";
import AnimeSlider from "../../components/AnimeSlider/AnimeSlider";
import MainLayout from "../../layout/MainLayout";
import "./Home.css";

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <AnimeSlider />
    </MainLayout>
  );
};

export default Home;
