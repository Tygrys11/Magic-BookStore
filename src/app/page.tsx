import Footer from "./components/Footer/Footer";
import { AboutUs } from "./components/Home/AboutUs";
import MagicBookCategories from "./components/Home/MagicBookCategories";
import MagicalFeatures from "./components/Home/MagicalFeatures";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MagicalFeatures />
      <AboutUs />
      <MagicBookCategories />
      <Footer />
    </>
  );
}
