import { AboutUs } from "./components/Home/AboutUs";
import { MainInfoShop } from "./components/Home/MainInfoShop";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <MainInfoShop /> */}
      <AboutUs />
    </>
  );
}
