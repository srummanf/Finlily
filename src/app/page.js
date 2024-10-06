import Navbar from "./components/Navbar"
import Features from "./components/Features";
import Hero from "./components/Hero2";
import Download from "./components/Download";
import Fact from "./components/Fact";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";


export default function Home() {
  return (
    <div>
      <Banner />
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <AboutUs/> */}
      <Fact />
      <Features />
      <Pricing/>
      <Download />
      {/* <Team/> */}
      <Footer />
    </div>
  );
}
