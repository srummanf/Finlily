import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing";
import Hero from "./components/Hero2";
import Download from "./components/Download";
import Fact from "./components/Fact";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      {/* <Hero/> */}
      {/* <AboutUs/> */}
      <Fact/>
      <Pricing/>
      <Download/>
      {/* <Team/> */}
      <Footer/>
    </div>
  );
}
