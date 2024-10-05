import Image from "next/image";
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing";
import Tagline from "./components/Tagline";
import Hero from "./components/Hero2";
import Download from "./components/Download";
import Fact from "./components/Fact";
import Table from "./components/Table";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";


export default function Home() {
  return (
    <div>
      {/* <Banner/> */}
      <Navbar/>
      <Hero/>
      <AboutUs/>
      {/* <Tagline/> */}
      <Fact/>
      <Pricing/>
      <Download/>
      <Table/>
    </div>
  );
}
