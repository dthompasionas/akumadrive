import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function mainLayout({ children }) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default mainLayout;
