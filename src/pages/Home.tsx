import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <>
      <Navbar />
      <Marquee />
      <Welcome />
      <Footer />
      <Marquee />
    </>
  );
}

export default Home;
